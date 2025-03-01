
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2 text-2xl">
      <h1>OpenXploit Test App</h1>
      <h3>{process.env.API_KEY}</h3>
      <h3>{process.env.DATABASE_URL}</h3>
      <h3>{process.env.NODE_ENV}</h3>
    </div>
  );
}
