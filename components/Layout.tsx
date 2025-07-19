// frontend/components/Layout.tsx
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    router.push("/");
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "1rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <nav>
          <Link href="/">Home</Link> | <Link href="/followers">Followers</Link>{" "}
          | <Link href="/following">Following</Link> |{" "}
          <Link href="/non-followers">Non-Followers</Link> |{" "}
          <Link href="/top-likers">Top Likers</Link> |{" "}
          <button onClick={handleLogout} style={{ marginLeft: 8 }}>
            Logout
          </button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
