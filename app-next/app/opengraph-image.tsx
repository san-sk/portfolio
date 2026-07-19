import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.fullName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1000px 600px at 80% -10%, rgba(16,185,129,0.28), transparent 60%), linear-gradient(135deg, #05070d 0%, #0a1120 60%, #071b16 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#04120c",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
            {site.socials.githubUser}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 74, fontWeight: 800, letterSpacing: -2 }}>
            I build Android that
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#34d399",
            }}
          >
            feels inevitable.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#cbd5e1" }}>
            {site.fullName} · {site.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["Kotlin", "Jetpack Compose", "KMP", "Performance", "Security"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#a7f3d0",
                border: "1px solid rgba(52,211,153,0.35)",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
