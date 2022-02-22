import React from 'react';
import { getBlogFiles, getBlogFile } from '@lib/blog';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter';
import { PostWrapper, Title } from '@components/post.styles';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
import Link from 'next/link';

export default function BlogPost({ post, frontMatter }) {
    return (
        <div>
            <Title>{frontMatter.Title}</Title>
            <PostWrapper>
                <MDXRemote {...post}></MDXRemote>
            </PostWrapper>
        </div>
    );
}


export async function getStaticProps({ params }) {
    const file = await getBlogFile(params.title);
    const { data, content } = matter(file);
    const post = await serialize(content, {
        scope: data,
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkPrism],
        }
    });
    return {
        props: {
            post,
            frontMatter: data
        }
    }
}

export async function getStaticPaths() {
    const dir = await getBlogFiles();
    return {
        paths: dir.map(file => ({ params: { title: file } })),
        fallback: true
    }
}