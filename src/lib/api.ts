import { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return []; // ✅ NEVER throw during build
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // ✅ SAFE FALLBACK
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch product:", res.status);
      return null; // ✅ DO NOT throw
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // ✅ SAFE FALLBACK
  }
}
