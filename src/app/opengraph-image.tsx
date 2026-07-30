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
            "radial-gradient(120% 90% at 5% 0%, rgba(118, 199, 142, 0.9), rgba(118, 199, 142, 0) 58%), radial-gradient(100% 85% at 90% 100%, rgba(67, 150, 94, 0.42), rgba(67, 150, 94, 0) 62%), linear-gradient(160deg, #f3fbf4 0%, #dfeee2 100%)",
          color: "#163f25",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
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
          <span>(440) 921-8245</span>
          <span>Starting at $40</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
