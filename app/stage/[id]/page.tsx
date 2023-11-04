export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return <main>Stage ID:{id}</main>;
}
