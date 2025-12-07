# My Digital Portfolio — Week 2 Prototype

**Vercel:** https://<your-app>.vercel.app  
**Security Plan:** https://<your-app>.vercel.app/security-plan

## LMS Curriculum References (Used This Week)
- Create GitHub Account – <URL>
- Install Git & Node – <URL>
- VS Code (Insider) + Copilot – <URL>
- Supercharge Copilot with MCP – <URL>
- Prototype with v0.dev – <URL>

## Security Notes
- **HTTPS** by default on Vercel; HSTS enabled.
- **Security Headers**: CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options, Permissions-Policy.
- **Secrets**: no secrets in repo; Vercel env vars used. See `.env.example`.
- **Auth readiness**: plan in `/security-plan` (OIDC + MFA).
- **Logging**: `/api/health` emits minimal JSON logs (no PII). Roadmap: pino + alerts.
- **Rate limits / WAF**: planned via Vercel/CDN or middleware.
- **CI security**: planned dependency scanning (Dependabot/Snyk), lint, type checks.

## Screenshots (v0.dev MFA)
See `/screenshots`:
- `v0-mfa-1.png` (Enable MFA page)
- `v0-mfa-2.png` (MFA enabled confirmation)
