import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Femi's Portfolio",
  description: "Femi's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased`}>
        <div className="pt-6 pb-12">{children}</div>
      </body>
    </html>
  );
}
