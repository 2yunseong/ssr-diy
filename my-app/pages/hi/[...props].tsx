/* /pages/hi/[...props].tsx */
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HiAll({ props: serverProps }: { props: string[] }) {
  const {
    query: { props },
  } = useRouter();

  useEffect(() => {
    console.log(props);
    console.log(JSON.stringify(props) === JSON.stringify(serverProps));
  }, [props, serverProps]);

  return (
    <>
      <ul>
        {serverProps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = (context: NextPageContext) => {
  const {
    query: { props },
  } = context;
  return { props: { props } };
};
