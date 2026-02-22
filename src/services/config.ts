/**
 * API Configuration
 * Ensures API base URL always includes /api/v1 prefix
 */

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Normalize API base URL to ensure it has /api/v1 prefix
 */
function normalizeApiBaseUrl(url: string): string {
  // If empty, return default
  if (!url) return "/api/v1";

  // Remove trailing slash
  url = url.replace(/\/$/, "");

  // If already has /api/v1, return as-is
  if (url.endsWith("/api/v1")) return url;

  // If has /api but not /v1, add /v1
  if (url.endsWith("/api")) return `${url}/v1`;

  // Otherwise add /api/v1
  return `${url}/api/v1`;
}

export const API_BASE_URL = normalizeApiBaseUrl(rawBaseUrl);

// Analytics configuration
export const ANALYTICS_API_URL = import.meta.env.VITE_ANALYTICS_API_URL || API_BASE_URL;
export const ANALYTICS_API_KEY = import.meta.env.VITE_ANALYTICS_API_KEY || "";
export const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === "true";
export const DEBUG_ANALYTICS = import.meta.env.VITE_DEBUG_ANALYTICS === "true";

function decodeBase64Utf8(base64: string): string {
  try {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  } catch (e) {
    return "";
  }
}

function tryDecodeResponse(raw: string): string {
  let current = raw.trim();
  for (let i = 0; i < 3; i++) {
    try {
      const decoded = decodeBase64Utf8(current);
      JSON.parse(decoded); // validate JSON
      return decoded;
    } catch {
      try {
        current = decodeBase64Utf8(current);
      } catch {
        break;
      }
    }
  }
  return raw;
}

export async function apiFetch(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(url, init);
  const text = await response.text();

  const isExplicitlyEncoded = response.headers.get("x-encoded-response") === "true";
  const looksLikeBase64 =
    text.length > 20 && /^[A-Za-z0-9+/ \n\r]+={0,2}$/.test(text.trim());

  if (isExplicitlyEncoded || looksLikeBase64) {
    const decoded = tryDecodeResponse(text);

    // Only alter response if it actually looks decoded (JSON)
    if (decoded !== text) {
      const newHeaders = new Headers(response.headers);
      newHeaders.delete("content-length");
      newHeaders.set("content-type", "application/json");

      return new Response(decoded, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    }
  }

  // Pass through normal text if not base64 encoded
  return new Response(text, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}
