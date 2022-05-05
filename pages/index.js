import { getBlogFiles, getBlogFile } from '@lib/blog';
import { Title, Subtitle, PostLink, PostsWrapper} from '@components/home.styles';
import { Root } from 'components/app.style'
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <Root>
      <Title className='text-2xl'>This is a blog</Title>
        <Subtitle className='text-xl'>These are its posts:</Subtitle>
        <PostsWrapper className='text-xl'>
        {
          posts.map((post, index) => (<PostLink key={index}>
            <Link  href={`/posts/${post.fileName}`}>
              {post.title}
            </Link>
          </PostLink>))
        }
        </PostsWrapper>
    </Root>
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
