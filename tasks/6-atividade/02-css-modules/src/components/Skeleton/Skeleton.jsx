import classNames from "classnames";
import styles from "./Skeleton.module.css";

export const Skeleton = () => {
    // Generate unique IDs for skeleton items
    const skeletonItems = Array.from({ length: 8 }, (_, index) => ({
        id: `skeleton-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));

    return (
        <div className={styles.gridCards}>
            {skeletonItems.map((item) => (
                <div key={item.id} className={styles.skeletonCard}>
                    <div className={styles.skeletonImageContainer}>
                        <div className={classNames(styles.skeleton, styles.skeletonImage)}></div>
                    </div>
                    <div className={classNames(styles.skeleton, styles.skeletonTitle)}></div>
                    <div className={classNames(styles.skeleton, styles.skeletonTitle, styles.skeletonTitleShort)}></div>
                    <div className={classNames(styles.skeleton, styles.skeletonDescription)}></div>
                    <div className={classNames(styles.skeleton, styles.skeletonDescription, styles.skeletonDescriptionShort)}></div>
                    <div className={classNames(styles.skeleton, styles.skeletonPrice)}></div>
                    <div className={styles.skeletonRating}>
                        <div className={classNames(styles.skeleton, styles.skeletonStar)}></div>
                        <div className={classNames(styles.skeleton, styles.skeletonStar)}></div>
                        <div className={classNames(styles.skeleton, styles.skeletonStar)}></div>
                        <div className={classNames(styles.skeleton, styles.skeletonStar)}></div>
                        <div className={classNames(styles.skeleton, styles.skeletonStar)}></div>
                        <div className={classNames(styles.skeleton, styles.skeletonRatingText)}></div>
                    </div>
                    <div className={classNames(styles.skeleton, styles.skeletonButton)}></div>
                </div>
            ))}
        </div>
    );
};