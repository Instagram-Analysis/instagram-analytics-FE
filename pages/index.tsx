import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Instagram Analytics Dashboard</h1>
      <p>Use the navigation above to explore your data.</p>
      <p>
        <Link href="/followers">See Followers &rarr;</Link>
      </p>
    </div>
  );
}
