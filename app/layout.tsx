import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://bishal-gurung-ux-engineer.bsal18.chatgpt.site",
  ),
  title: "Bishal Gurung — Lead UX Engineer",
  description:
    "Bishal Gurung is a Lead UX Engineer in Kathmandu, bridging product design, Figma prototyping and React / Next.js frontend development.",
  openGraph: {
    title: "Bishal Gurung — Thoughtful design. Carefully built.",
    description:
      "Selected work in mentorship, enterprise workflows and travel. Product thinking meets frontend craft.",
    type: "website",
    images: [
      {
        url: "/assets/social.svg",
        width: 1200,
        height: 630,
        alt: "Bishal Gurung — Thoughtful design. Carefully built.",
      },
    ],
  },
};

export const viewport: Viewport = { themeColor: "#111821" };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
