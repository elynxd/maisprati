export const Skeleton = () => {
    return (
        <div className="grid-cards">
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index.id} className="skeleton-card">
                    <div className="skeleton skeleton-image"></div>
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-title skeleton-title--short"></div>
                    <div className="skeleton skeleton-description"></div>
                    <div className="skeleton skeleton-description skeleton-description--short"></div>
                    <div className="skeleton skeleton-price"></div>
                    <div className="skeleton-rating">
                        <div className="skeleton skeleton-star"></div>
                        <div className="skeleton skeleton-rating-text"></div>
                    </div>
                    <div className="skeleton skeleton-button"></div>
                </div>
            ))}
        </div>
    );
};