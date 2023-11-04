export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return <main>Event ID:{id}</main>;
}
