'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Quote {
  content: string;
  author: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Quote[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    }
  }, []);

  const removeFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>❤️</span>
          <span>Favorite Quotes</span>
        </h1>
        <Link href="/" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>Back to Home</Link>
      </div>
      
      {favorites.length === 0 ? (
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p style={{ marginBottom: '1rem' }}>You haven't saved any quotes yet.</p>
          <Link href="/" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2196F3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}>
            Find Quotes to Save
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {favorites.map((quote, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <blockquote style={{ 
                fontStyle: 'italic',
                fontSize: '1.25rem',
                lineHeight: '1.6',
                margin: '0 0 1rem 0'
              }}>
                "{quote.content}"
              </blockquote>
              <p style={{ 
                textAlign: 'right', 
                fontWeight: 'bold',
                margin: 0
              }}>
                — {quote.author}
              </p>
              <button
                onClick={() => removeFavorite(index)}
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
                aria-label="Remove quote"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}