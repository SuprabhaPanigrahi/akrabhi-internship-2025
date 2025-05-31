import React, { useEffect, useState } from "react";
import axios from "axios";
import { GridContainer, ProductGrid } from "@/styles/dashboardStyle";
import FilterBar from "@/components1/FilterBar";
import ProductCard from "@/components1/ProductCard";
import CartIcon  from "@/components1/CartIcon";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sort, setSort] = useState("default");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setProducts(data);
        setFiltered(data);
        setCategories(["all", ...new Set(data.map((p: Product) => p.category))]);
        const prices = data.map((p: Product) => p.price);
        setPriceRange([Math.min(...prices), Math.max(...prices)]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    if (search.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }
    if (minRating > 0) {
      result = result.filter((p) => p.rating.rate >= minRating);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (sort === "price-low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "rating-high-low") {
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setFiltered(result);
  }, [search, category, minRating, priceRange, sort, products]);

  return (
    <GridContainer>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
      <CartIcon />
      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        minRating={minRating}
        setMinRating={setMinRating}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
      <ProductGrid>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </GridContainer>
  );
};

export default Dashboard;
