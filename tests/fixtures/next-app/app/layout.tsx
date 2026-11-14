import "./globals.css";

export const metadata = { title: "Northwind Studio", description: "Product design for small teams." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <a href="/" className="brand">Northwind Studio</a>
          <nav>
            <a href="/">Home</a>
          </nav>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
