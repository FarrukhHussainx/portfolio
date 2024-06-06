import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farrukh Hussain",
  description:
    "An aesthetic software engineer proficient in full stack web development with the MERN stack and Next.js, continuously striving to enhance and broaden technical skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
