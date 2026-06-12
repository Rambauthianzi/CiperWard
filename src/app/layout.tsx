import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CipherWard Technologies — Encrypt. Defend. Secure.",
  description:
    "Advanced cybersecurity solutions that safeguard businesses from evolving cyber threats through intelligent defense, proactive monitoring, and trusted expertise.",
  authors: [{ name: "CipherWard Technologies" }],
  openGraph: {
    title: "CipherWard Technologies — Encrypt. Defend. Secure.",
    description: "Protecting Digital Assets. Securing Tomorrow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherWard Technologies",
    description: "Protecting Digital Assets. Securing Tomorrow.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
