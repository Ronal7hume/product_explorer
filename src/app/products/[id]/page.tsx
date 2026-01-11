import Image from "next/image";
import { getProduct } from "@/lib/api";
import ProductActions from "@/components/ProductActions";
import { Product } from "@/types/product";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product: Product = await getProduct(id);

  return (
  <main className="max-w-6xl mx-auto p-6">
  <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white rounded-xl transition-colors">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
      
      {/* Image */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden
                      bg-gray-100 dark:bg-gray-100 shadow-lg">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6"
          priority
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-700 dark:text-gray-300">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <span className="text-2xl font-bold">
            ₹ {product.price}
          </span>

          <ProductActions productId={product.id} />
        </div>
      </div>
    </div>
  </div>
</main>

);

}
