export default function SecurityPlan() {
  return (
    <main style={{ maxWidth: 880, margin: "40px auto", padding: 24, lineHeight: 1.6 }}>
      <h1>Security Plan — Upcoming Controls</h1>

      <h2>1) Authentication Readiness</h2>
      <ul>
        <li>OIDC/OAuth (Auth0 / NextAuth / Clerk) with MFA.</li>
        <li>HttpOnly, Secure, SameSite=strict cookies; short-lived sessions.</li>
        <li>RBAC for future admin features.</li>
      </ul>

      <h2>2) Secrets Handling</h2>
      <ul>
        <li>No secrets in git; use Vercel env vars.</li>
        <li>Key rotation; least privilege for tokens.</li>
        <li><code>.env.example</code> for onboarding only.</li>
      </ul>

      <h2>3) App-Layer Protections</h2>
      <ul>
        <li>Security headers (HSTS, CSP, XFO, Referrer Policy, Permissions-Policy).</li>
        <li>Input validation & output encoding (e.g., Zod).</li>
        <li>Rate-limiting/WAF via Vercel/CDN or middleware for APIs.</li>
      </ul>

      <h2>4) Logging & Monitoring</h2>
      <ul>
        <li>Structured logs (planned: pino) without PII.</li>
        <li>Centralized logs + alerts for 4xx/5xx anomalies.</li>
        <li>Uptime monitor using <code>/api/health</code>.</li>
      </ul>

      <h2>5) Supply Chain & Build</h2>
      <ul>
        <li>Dependency updates (Dependabot/Snyk), lockfiles pinned.</li>
        <li>CI checks: lint, typecheck, basic security scans.</li>
        <li>Least-privilege CI tokens; immutable builds.</li>
      </ul>

      <h2>6) Data Protection</h2>
      <ul>
        <li>HTTPS only; no mixed content.</li>
        <li>Planned: DB encryption at rest; minimised data collection.</li>
        <li>Backups + restore testing when persistence is added.</li>
      </ul>

      <h2>7) Incident Readiness</h2>
      <ul>
        <li>Friendly error pages (no stack traces to users).</li>
        <li>Runbooks: revoke keys, rotate secrets, patch & redeploy.</li>
        <li>Post-incident review/hardening.</li>
      </ul>

      <p style={{ marginTop: 16 }}>
        Status: Baseline headers & secrets hygiene in place. Next: auth, rate limits,
        structured logs, CI scanning, and WAF tuning.
      </p>
    </main>
  );
}
