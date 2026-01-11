import { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
