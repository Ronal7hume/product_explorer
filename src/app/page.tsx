/* "use client";

export default function Page() {
  console.log("React is running");

  return <h1>Hello React</h1>;
} */

  import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

export default async function HomePage() {
  const products = await getProducts();
  return <ProductGrid products={products} />;
}
