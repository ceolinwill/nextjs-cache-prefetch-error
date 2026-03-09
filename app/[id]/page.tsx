import { Metadata } from "next";
import { prisma } from "@/prisma";

export async function generateMetadata({ params }: PageProps<"/[id]">): Promise<Metadata> {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  return { title: post?.title || "Post Not Found" };
}

export default async function Page({ params }: PageProps<"/[id]">) {
  const { id } = await params;

  return (
    <div>
      <h1>Page ID: {id}</h1>
    </div>
  );
}
