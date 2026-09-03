// In dev, Vite proxies "/api" to the Express server (see vite.config.js).
// In production, set VITE_API_URL to your deployed backend's base URL.
const BASE_URL = import.meta.env.VITE_API_URL || "";

export async function createLead(payload) {
  const res = await fetch(`${BASE_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }

  return data;
}
