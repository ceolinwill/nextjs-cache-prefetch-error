import { prisma } from "@/prisma";

export default async function Page({ params }: PageProps<"/[id]">) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  return (
    <div>
      <h1>Page ID: {post?.id}</h1>
    </div>
  );
}
