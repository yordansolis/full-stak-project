import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi App",
  icons: {
    icon: "/favicon",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased 
          bg-neutral-950 text-neutral-300 
          min-h-screen transition-colors duration-300
        `}
      >
        <nav className="bg-neutral-900 text-neutral-200 border-b border-neutral-800 px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="hover:text-neutral-400 transition">
              <h1 className="text-xl font-semibold">API de Usuarios</h1>
            </Link>
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-neutral-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/getusers"
                  className="hover:text-neutral-400 transition"
                >
                  Get Users
                </Link>
              </li>
              <li>
                <Link
                  href="/postusers"
                  className="hover:text-neutral-400 transition"
                >
                  Post User
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {children}
        </main>
      </body>
    </html>
  );
}
