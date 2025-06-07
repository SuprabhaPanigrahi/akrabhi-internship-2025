'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Quote {
  content: string;
  author: string;
}

export default function QuoteDisplay() {
  const [quote, setQuote] = useState<Quote>({
    content: 'Loading quote...',
    author: ''
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.quotable.io/random', {
        cache: 'no-store'
      });

      if (!res.ok) throw new Error('Failed to fetch quote');
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote({
        content: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveToFavorites = () => {
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('favorites') || '[]');
      const newFavorites = [...existing, quote];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      alert('Saved to favorites!');
      router.refresh();
    }
  };

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌞</div>
      
      <blockquote style={{
        fontSize: '1.5rem',
        fontStyle: 'italic',
        lineHeight: '1.6',
        margin: '1.5rem 0',
        padding: '0 1rem',
        color: 'black'
      }}>
        "{quote.content}"
      </blockquote>
      
      <p style={{
        marginTop: '1rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: 'black'
      }}>
        — {quote.author}
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <button
          onClick={fetchQuote}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            minWidth: '160px'
          }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'New Quote'}
        </button>

        <button
          onClick={saveToFavorites}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            minWidth: '160px'
          }}
        >
          Save to Favorites
        </button>
      </div>
    </div>
  );
}