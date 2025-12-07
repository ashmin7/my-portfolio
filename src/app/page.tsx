export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Ashmin Portfolio";

  const lmsLinks = [
    { title: "Create GitHub Account", url: "#" },
    { title: "Install Git & Node", url: "#" },
    { title: "VS Code + Copilot (Insider)", url: "#" },
    { title: "Supercharge Copilot with MCP", url: "#" },
    { title: "Prototype with v0.dev", url: "#" },
  ];

  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: 24, lineHeight: 1.6 }}>
      <h1>{siteName} — Week 2 Prototype</h1>

      <p>
        Hi, I’m <strong>Ashmin Aryal</strong>. This Vercel-deployed prototype includes a secure
        landing page, documented LMS references, and a{" "}
        <a href="/security-plan">/security-plan</a> outlining upcoming controls.
      </p>

      <hr style={{ margin: "24px 0" }} />

      <h2>LMS Curriculum References Used</h2>
      <ul>
        {lmsLinks.map((link) => (
          <li key={link.title}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <h2>Deployment &amp; Security</h2>
      <ul>
        <li>Platform: Vercel (HTTPS by default)</li>
        <li>Security Headers: HSTS, CSP, XFO, Referrer-Policy, etc.</li>
        <li>Secrets: via Vercel Environment Variables (no secrets in repo)</li>
        <li>
          Health Endpoint: <code>/api/health</code>
        </li>
        <li>MFA: v0.dev account protected (screenshots included)</li>
      </ul>
    </main>
  );
}
