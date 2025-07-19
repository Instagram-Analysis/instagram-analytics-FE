// frontend/pages/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState<"login" | "twoFactor" | "challenge">(
    "login"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [challengeUrl, setChallengeUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const API = process.env.NEXT_PUBLIC_API_URL!;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      const json = await res.json();

      if (res.ok) {
        // Logged in straight through
        return router.push("/followers");
      }

      if (json.twoFactorRequired) {
        setStep("twoFactor");
        return;
      }

      if (json.challengeRequired) {
        window.open(json.challengeUrl, "_blank");
        setError(
          "Please complete the Instagram challenge in the new tab, then try logging in again."
        );
        return;
      }

      throw new Error(json.error || "Login failed");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message);
    }
  };

  const handleTwoFactor = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API}/api/auth/two-factor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ twoFactorCode }),
      });
      const json = await res.json();

      if (res.ok) {
        return router.push("/followers");
      }

      throw new Error(json.error || "2FA verification failed");
    } catch (err: any) {
      console.error("2FA error:", err);
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Instagram Analytics Login</h1>

      {step === "login" && (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <label>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ marginTop: "1rem" }}>
            Log In
          </button>
        </form>
      )}

      {step === "twoFactor" && (
        <form onSubmit={handleTwoFactor}>
          <div>
            <label>Two‐Factor Code</label>
            <br />
            <input
              type="text"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ marginTop: "1rem" }}>
            Verify Code
          </button>
        </form>
      )}

      {step === "challenge" && (
        <div>
          <p>
            Instagram has flagged this as a new device. Please verify your
            login.
          </p>
          <p>
            Click the link below to complete the challenge, then return here and
            click Continue.
          </p>
          <a
            href={challengeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginBottom: "1rem" }}
          >
            Open Instagram Verification
          </a>
          <br />
          <button onClick={() => setStep("login")}>Continue</button>
        </div>
      )}
    </div>
  );
}
