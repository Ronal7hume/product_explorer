"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/useFavorites";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700
                    bg-white dark:bg-gray-900
                    p-4 shadow-sm hover:shadow-lg transition">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-44 w-full mb-3 rounded-md
                        bg-gray-100 dark:bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-3"
          />
        </div>
      </Link>

      {/* Category */}
      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
        {product.category}
      </p>

      {/* Title */}
      <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mt-1">
        {product.title}
      </h3>

      {/* Price + Favorite */}
      <div className="flex items-center justify-between mt-4">
        <span className="font-semibold text-gray-900 dark:text-white">
          ₹ {product.price}
        </span>

        <button
          onClick={() => toggleFavorite(product.id)}
          aria-label="Toggle favorite"
          className={`text-lg transition ${
            isFavorite
              ? "text-red-500"
              : "text-gray-400 dark:text-white hover:text-red-400"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}
