/**
 * HTML sanitization utilities for blog / user-generated content.
 *
 * Current state: the blog form stores plain text (textarea, no HTML editor).
 * React renders text by default — no XSS risk for plain-text content.
 *
 * IMPORTANT: if you upgrade to a WYSIWYG editor that stores HTML, replace
 * sanitizeHtml() below with a hardened library such as `sanitize-html` or
 * `isomorphic-dompurify` before passing content to dangerouslySetInnerHTML.
 * The regex approach here is a useful safety net but not exhaustive.
 */

/** Tags that are safe to render as HTML in blog content. */
const ALLOWED_TAGS =
  /^(p|br|strong|b|em|i|u|s|del|blockquote|code|pre|h[1-6]|ul|ol|li|hr|a|img|span|div)$/i

/** Matches any inline event handler attribute (onclick, onload, etc.). */
const EVENT_HANDLERS = /\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi

/** Matches dangerous URL protocols in href/src attributes. */
const DANGEROUS_PROTOCOLS = /(href|src)\s*=\s*["']?\s*(javascript|data|vbscript):/gi

/**
 * Strips all HTML tags, returning only the raw text content.
 * Use this for plain-text contexts (meta descriptions, search indexes).
 */
export function stripHtml(raw: string): string {
  return raw.replace(/<[^>]*>/g, "").trim()
}

/**
 * Removes dangerous patterns from an HTML string and strips disallowed tags.
 * Safe for use with dangerouslySetInnerHTML on trusted admin-authored content.
 *
 * Does NOT defend against all possible XSS vectors — see the file header.
 */
export function sanitizeHtml(html: string): string {
  return html
    .replace(EVENT_HANDLERS, "")
    .replace(DANGEROUS_PROTOCOLS, '$1="about:blank"')
    .replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (_, closing, tag) =>
      ALLOWED_TAGS.test(tag) ? `<${closing}${tag}>` : ""
    )
}
