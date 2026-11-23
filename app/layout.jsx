import "./globals.css";

export const metadata = {
  title: "Web Art — Everything Digital",
  description: "Digital services and carefully selected digital products, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
