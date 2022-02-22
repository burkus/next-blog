import { getBlogFiles, getBlogFile } from '@lib/blog';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Hallo</h1>
      <h3>This is a blgo</h3>
      {
        posts.map(post => (<h2>
          <Link href={`/posts/${post.fileName}`}>
            {post.title}
          </Link>
        </h2>))
      }
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
