import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthRouter from "./authRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe Firebase and Next.js Setup",
  description: "A simple setup for using Stripe with Firebase and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthRouter>
          <div
            className="w-full h-screen bg-slate-900 text-white 
                      flex flex-col justify-center items-center gap-4"
          >
            <div className="-mt-24" />
            {children}
          </div>
        </AuthRouter>
      </body>
    </html>
  );
}
