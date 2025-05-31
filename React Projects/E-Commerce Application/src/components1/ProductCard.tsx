import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components1/CartContext";
import { toast } from "sonner";
import {
  ProductCardContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductRating,
} from "@/styles/productCardStyle";
import { CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`"${product.title}" has been added to cart`, {
      duration: 2000,
    });
  };

  return (
    <ProductCardContainer>
      <div className="h-48 flex items-center justify-center p-4">
        <ProductImage src={product.image} alt={product.title} />
      </div>
      <CardContent className="p-4">
        <ProductTitle className="font-semibold text-lg mb-2 line-clamp-2">
          {product.title}
        </ProductTitle>
        <ProductDescription className="text-gray-600 text-sm line-clamp-3 mb-3">
          {product.description}
        </ProductDescription>
        <div className="flex justify-between items-center mt-auto">
          <ProductPrice className="font-bold text-green-600">
            ${product.price.toFixed(2)}
          </ProductPrice>
          <ProductRating className="text-sm text-yellow-500">
            ⭐ {product.rating.rate} ({product.rating.count})
          </ProductRating>
        </div>
        <Button onClick={handleAddToCart} className="w-full mt-4">
          Add to Cart
        </Button>
      </CardContent>
    </ProductCardContainer>
  );
};

export default ProductCard;
