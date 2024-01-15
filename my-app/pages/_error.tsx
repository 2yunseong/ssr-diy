import { NextPageContext } from 'next';

export default function Error({ statusCode }: { statusCode: number }) {
  return <p>에러코드: {statusCode}</p>;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : '';
  return { statusCode };
};
