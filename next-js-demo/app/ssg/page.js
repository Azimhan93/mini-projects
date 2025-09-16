export const dynamic = "force-static";

export default function SSGPage() {
  const now = new Date().toISOString();
  return (
    <>
      <h1>SSG</h1>
      <p>Build time: {now}</p>
      <p>Время «замрёт» до следующего билда.</p>
    </>
  );
}