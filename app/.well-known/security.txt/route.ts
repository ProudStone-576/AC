export function GET() {
  const content = `Contact: mailto:security@aethoncore.com
Preferred-Languages: en
Canonical: https://aethoncore.com/.well-known/security.txt
Policy: https://aethoncore.com/legal/security
Expires: 2027-01-01T00:00:00.000Z
`
  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  })
}
