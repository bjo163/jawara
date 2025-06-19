"use client";

export function CardSkeleton() {
  return (
    <div className="jawara-card p-6">
      <div className="space-y-4">
        <div className="jawara-skeleton h-12 w-12 rounded-lg"></div>
        <div className="jawara-skeleton h-6 w-3/4"></div>
        <div className="jawara-skeleton h-4 w-full"></div>
        <div className="jawara-skeleton h-4 w-5/6"></div>
        <div className="space-y-2">
          <div className="jawara-skeleton h-3 w-full"></div>
          <div className="jawara-skeleton h-3 w-4/5"></div>
          <div className="jawara-skeleton h-3 w-3/4"></div>
        </div>
      </div>
    </div>
  );
}
