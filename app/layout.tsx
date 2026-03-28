import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai-agent-builder-web | Agentic platform for AI development",
  description:
    "Build AI products with specialized agents. Plan, ship, debug, review, and scale AI development workflows through one focused workspace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
