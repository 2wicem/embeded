import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0d0a",
          color: "#f1eee4",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d4f06e",
          }}
        >
          {site.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 0.95 }}>{site.name}</div>
          <div style={{ marginTop: 16, fontSize: 32, color: "#e0a36a" }}>
            {site.role}
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 860,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#9c988c",
            }}
          >
            {site.oneLiner}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
