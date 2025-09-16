export const dynamic = "force-dynamic";

export default function SSRPage() {
  const now = new Date().toISOString();
  return (
    <>
      <h1>SSR</h1>
      <p>Rendered at: {now}</p>
      <p>Каждый запрос формирует HTML заново (нет кэша страницы).</p>
    </>
  );
}