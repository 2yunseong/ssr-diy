import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../api/post';

// params에 등록된 id로 된 path에만 접근이 가능하다.
// 여기에 등록된 id를 기반으로 파일을 만든다.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

// params를 통해 data를 가져와, props로 넘겨줌.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const post = { id, content: 'hello' };

  return {
    props: { post },
  };
};

// getStaticProps로 만들어진 props를 이용해 컴포넌트를 서버에서 HTML로 그림
export default function Post({ post }: { post: Post }) {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.content}</p>
    </div>
  );
}
