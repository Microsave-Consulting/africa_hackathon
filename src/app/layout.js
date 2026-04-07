import "./globals.css";

export const metadata = {
  title: "Africa Digital ID Hackathon",
  description: "Build digital identity solutions for Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
