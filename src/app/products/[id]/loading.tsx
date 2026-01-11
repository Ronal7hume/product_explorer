export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image skeleton */}
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-sm" />

        {/* Text skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/4 rounded-full" />
          <div className="h-6 bg-gray-300 dark:bg-gray-700 w-3/4 rounded-lg" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-full rounded-lg" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-2/3 rounded-lg" />
          <div className="h-6 bg-gray-300 dark:bg-gray-700 w-1/3 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
