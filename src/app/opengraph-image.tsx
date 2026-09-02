import { ImageResponse } from "next/og";

export const alt = "Latten Lawncare serving Lorain County";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: "56px",
          background:
            "radial-gradient(120% 90% at 5% 0%, rgba(28, 122, 74, 0.85), rgba(28, 122, 74, 0) 58%), radial-gradient(100% 85% at 90% 100%, rgba(245, 166, 35, 0.35), rgba(245, 166, 35, 0) 62%), linear-gradient(160deg, #0d3a23 0%, #124f30 100%)",
          color: "#f2fbf3",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#f5a623",
          }}
        >
          Lorain County Lawn Care
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>Latten Lawncare</div>
          <div style={{ fontSize: 34, maxWidth: "82%", lineHeight: 1.25 }}>
            Lawn Cutting, Edging, and Weed Control for Small to Medium Lawns
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <span>(216) 889-7822</span>
          <span>Starting at $40</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
