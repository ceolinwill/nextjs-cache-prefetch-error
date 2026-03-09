import { Metadata } from "next";
import { prisma } from "@/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: { id: 1 },
  });

  return { title: post?.title || "Post Not Found" };
}

export default async function Page() {
  return (
    <div>
      <h1>Does this happen on pages without dynamic params?</h1>
    </div>
  );
}
