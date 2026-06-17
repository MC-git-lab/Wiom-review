import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wiom Review Project",
  description: "Wiom customer sentiment from Play Store and YouTube, by sentiment and by review type",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-[#1f1023] antialiased`}>
        {children}
      </body>
    </html>
  );
}
