export default function SkeletonCard() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      {/* Image skeleton */}
      <div className="h-40 bg-gray-200 rounded mb-3" />

      {/* Text skeletons */}
      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />

      {/* Price */}
      <div className="h-4 bg-gray-200 rounded w-1/4 mt-4" />
    </div>
  );
}
