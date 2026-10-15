
export default function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4">
      <div className="h-40 rounded-lg bg-muted" />

      <div className="mt-4 h-5 w-3/4 rounded bg-muted" />

      <div className="mt-3 h-4 w-full rounded bg-muted" />
      <div className="mt-2 h-4 w-2/3 rounded bg-muted" />
    </div>
  )
}
