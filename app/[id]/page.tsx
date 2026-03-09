export async function Page({ params }: PageProps<"/[id]">) {
  const { id } = await params;

  return (
    <div>
      <h1>Page ID: {id}</h1>
    </div>
  );
}
