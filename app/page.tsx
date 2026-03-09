import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/posts" prefetch>Page link with prefetch enabled</Link>
    </div>
  );
}
