import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/1" prefetch>Page 1</Link>
      <Link href="/2" prefetch>Page 2</Link>
    </div>
  );
}
