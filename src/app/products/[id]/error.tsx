"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="max-w-md mx-auto p-8 text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
        Oops! Something went wrong
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {error.message || "An unexpected error occurred."}
      </p>

      <button
        onClick={reset}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700
                   dark:bg-blue-500 dark:hover:bg-blue-600
                   transition-colors duration-200
                   text-white font-medium rounded-lg
                   shadow-sm hover:shadow-md"
      >
        Try Again
      </button>
    </div>
  );
}
