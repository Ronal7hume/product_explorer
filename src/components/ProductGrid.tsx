"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/useFavorites";
import ProductCard from "@/components/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavs, setShowFavs] = useState(false);
  const [priceSort, setPriceSort] = useState("none");

  const { favorites } = useFavorites();

  const categories = Array.from(new Set(products.map(p => p.category)));

  let filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    const matchesFavorites = !showFavs || favorites.includes(p.id);
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  if (priceSort === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (priceSort === "high") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <section className="space-y-8">
      {/* 🔍 Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center
                      p-4 rounded-xl
                      bg-white dark:bg-gray-900
                      border border-gray-200 dark:border-gray-700">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-64 px-3 py-2 rounded-md
                     bg-white border border-gray-300
                     text-gray-900
                     dark:bg-white dark:text-gray-900
                     focus:ring-2 focus:ring-blue-500"
        />

        {/* Category */}
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="px-3 py-2 rounded-md
                     bg-white border border-gray-300
                     text-gray-900
                     dark:bg-white dark:text-gray-900"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Price Sort */}
        <select
          value={priceSort}
          onChange={e => setPriceSort(e.target.value)}
          className="px-3 py-2 rounded-md
                     bg-white border border-gray-300
                     text-gray-900
                     dark:bg-white dark:text-gray-900"
        >
          <option value="none">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        {/* Favorites */}
        <button
          onClick={() => setShowFavs(prev => !prev)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition
            ${
              showFavs
                ? "bg-red-500 text-white"
                : "bg-white text-gray-900 border border-gray-300"
            }`}
        >
          {showFavs ? "Showing Favorites" : "Show Favorites"}
        </button>
      </div>

      {/* 🧱 Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
