import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CartItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 4px;
`;

export const CartItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CartItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CartItemPrice = styled.p`
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span {
    min-width: 2rem;
    text-align: center;
  }
`;

export const CartSummary = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--muted);
  }
`;