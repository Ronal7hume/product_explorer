"use client";

import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";

interface ProductActionsProps {
  productId: number;
}

export default function ProductActions({ productId }: ProductActionsProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(productId);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
      <Link
        href="/"
        className="px-5 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        ← Back to Products
      </Link>

      <button
        onClick={() => toggleFavorite(productId)}
        aria-label="Toggle favorite"
        className={`px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isFavorite
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        {isFavorite ? "♥ Remove Favorite" : "♡ Add to Favorites"}
      </button>
    </div>
  );
}
