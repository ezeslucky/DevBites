import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { Skeleton } from "@/components/ui/skeleton"

const numbers = [1, 2, 3, 4, 5, 6]

export default function LoaderCodes({
  isUserProfile,
}: {
  isUserProfile?: boolean
}) {
  return (
    <>
      {isUserProfile ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Skeleton className="h-40 w-40 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-6 w-[100px] bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-4 w-[200px] bg-zinc-200 dark:bg-zinc-800" />
        </div>
      ) : null}
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          659: 1,
          660: 1,
          720: 1,
          1200: 2,
        }}
        className="w-full"
      >
        <Masonry gutter="2rem">
          {numbers.map((number) => (
            <div className="mb-0 flex flex-col gap-2" key={number}>
              <Skeleton className="h-[200px] overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center justify-start gap-2">
                  <Skeleton className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-4 w-[200px] bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="flex shrink-0 items-center justify-end gap-3">
                  <Skeleton className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
              <Skeleton className="h-[10px] w-3/4 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-[10px] w-5/6 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-[10px] w-1/3 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-2">
                <Skeleton className="h-5 w-[70px] rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-5 w-[70px] rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-5 w-[70px] rounded-full bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}
