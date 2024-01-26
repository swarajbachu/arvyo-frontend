import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/provider/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arvyo",
  description: "Arvyo Driver Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-left" />
      <AuthProvider>
        <body className={inter.className}>
          <div>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
