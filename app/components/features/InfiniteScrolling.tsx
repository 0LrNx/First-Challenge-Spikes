import { reviews } from "./InfiniteScrolling/dataScrolling";
import ReviewList from "../ui/ReviewList";

export function InfiniteScrolling() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <ReviewList reviews={reviews} />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
