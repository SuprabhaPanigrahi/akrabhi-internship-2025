import Link from 'next/link';

export const metadata = {
  title: 'Daily Quotes',
  description: 'Inspiring quotes to start your day',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        backgroundColor: '#f3eded',
        maxWidth: '800px',
        margin: '0 auto',
        minHeight: '100vh'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', gap: '0.5rem' }}>
            <span>🌞</span>
            <span>Daily Quotes</span>
          </h1>
          <nav style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/" style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}>Home</Link>
            <Link href="/favorites" style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#2196F3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}>Favorites</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}