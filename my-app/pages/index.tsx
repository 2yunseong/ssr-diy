import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link prefetch={false} href='hello'>
        Link로 이동
      </Link>
    </>
  );
}
