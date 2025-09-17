export const Skeleton = () => {
    // Generate unique IDs for skeleton items
    const skeletonItems = Array.from({ length: 8 }, (_, index) => ({
        id: `skeleton-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));

    return (
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:gap-6 sm:p-4 md:grid-cols-3 md:gap-8 md:p-6 lg:grid-cols-4 lg:gap-8 lg:p-8">
            {skeletonItems.map((item) => (
                <div key={item.id} className="mx-auto flex min-h-[520px] w-full max-w-[350px] flex-col items-center gap-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] p-4 shadow-[0_2px_4px_var(--shadow)] sm:gap-3 sm:p-3">
                    <div className="relative w-full">
                        <div className="animate-skeleton h-[200px] w-full rounded-lg" />
                    </div>
                    <div className="animate-skeleton my-1 h-5 w-4/5 rounded" />
                    <div className="animate-skeleton my-1 h-5 w-3/5 rounded" />
                    <div className="animate-skeleton my-1 h-4 w-11/12 rounded" />
                    <div className="animate-skeleton my-1 h-4 w-3/4 rounded" />
                    <div className="animate-skeleton my-2 h-5 w-1/2 rounded" />
                    <div className="my-2 flex h-6 w-full items-center justify-center gap-2">
                        <div className="animate-skeleton h-5 w-5 rounded-sm" />
                        <div className="animate-skeleton h-5 w-5 rounded-sm" />
                        <div className="animate-skeleton h-5 w-5 rounded-sm" />
                        <div className="animate-skeleton h-5 w-5 rounded-sm" />
                        <div className="animate-skeleton h-5 w-5 rounded-sm" />
                        <div className="animate-skeleton h-4 w-8 rounded" />
                    </div>
                    <div className="animate-skeleton mt-auto h-11 w-full rounded-lg" />
                </div>
            ))}
        </div>
    );
};