import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background-color: #a3a1a8;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  max-height: 180px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
  padding: 1rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.75rem 0 0.5rem;
`
export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`
export const ProductPrice = styled.p`
  font-size: medium;
  color: green;
`
export const ProductRating = styled.p`
  color: red;
`
