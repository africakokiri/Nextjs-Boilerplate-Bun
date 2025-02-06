import type { Metadata } from "next";
import "@/styles/globals.css";
import NextThemesProvider from "@/libs/next-themes-provider";

export const metadata: Metadata = {
  title: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased w-screen h-screen">
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
