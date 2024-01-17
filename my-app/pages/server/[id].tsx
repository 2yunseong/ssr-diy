import { GetServerSideProps } from "next";
import { Post } from "../api/post";

export default function Post({ post }: { post: Post }) {
  return <div>{post.content}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { id = "" },
  } = context;
  const post = null;

  if (!post)
    return {
      redirect: {
        destination: "/404",
      },
    };
  return {
    props: { post },
  };
};
