export const revalidate = 10;

export default function ISRPage() {
  const now = new Date().toISOString();
  return (
    <>
      <h1>ISR</h1>
      <p>Revalidate every 10s. Rendered at: {now}</p>
      <p>После 10с при трафике будет сгенерирована свежая версия.</p>
    </>
  );
}