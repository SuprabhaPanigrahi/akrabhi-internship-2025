import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { FilterBarContainer, FilterGroup } from "@/styles/filterBarStyle";

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
  minRating: number;
  setMinRating: (value: number) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  sort: string;
  setSort: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  minRating,
  setMinRating,
  priceRange,
  setPriceRange,
  sort,
  setSort,
}) => {
  return (
    <FilterBarContainer>
      <FilterGroup>
        <Label className="text-gray-700">Search</Label>
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </FilterGroup>

      <FilterGroup>
        <Label className="text-gray-700">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories
              .filter((cat) => cat?.trim() !== "")
              .map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label className="text-gray-700">Min Rating</Label>
        <Select
          value={minRating.toString()}
          onValueChange={(val) => setMinRating(Number(val))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Any rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any rating</SelectItem>
            <SelectItem value="3">3+ stars</SelectItem>
            <SelectItem value="4">4+ stars</SelectItem>
            <SelectItem value="4.5">4.5+ stars</SelectItem>
          </SelectContent>
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label className="text-gray-700">
          Price: ${priceRange[0]} - ${priceRange[1]}
        </Label>
        <Slider
          value={priceRange}
          min={0}
          max={1000}
          step={10}
          onValueChange={setPriceRange}
          className="w-[200px]"
        />
      </FilterGroup>

      <FilterGroup>
        <Label className="text-gray-700">Sort By</Label>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="rating-high-low">Rating: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </FilterGroup>
    </FilterBarContainer>
  );
};

export default FilterBar;