import { getBlogFiles, getBlogFile } from '@lib/blog';
import { Title, Subtitle, Root, PostLink } from '@components/home.styles';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      <Title>This is a blog</Title>
      <Root>
        <Subtitle>These are its posts</Subtitle>
        {
          posts.map((post, index) => (<PostLink key={index}>
            <Link href={`/posts/${post.fileName}`}>
              {post.title}
            </Link>
          </PostLink>))
        }
    </Root>
    </div>
    
  );
}

export async function getStaticProps() {
  const dir = await getBlogFiles();
  const posts = [];
  dir.forEach(async (fileName) => {
    const file = await getBlogFile(fileName);
    const { data } = matter(file);
    posts.push({
      title: data.Title,
      fileName
    });
  })
  
  return {
    props: {
      posts
    }
  }
}
