import styled, { keyframes, css } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const GridCards = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  
  grid-template-columns: 1fr;

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1.5rem;
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
`;

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
  min-width: 20rem;
  max-width: 350px;
  margin: 0 auto;
  min-height: 520px;

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 0.75rem;
  }
`;

const SkeletonImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 25%,
    var(--border-color) 50%,
    var(--bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: 4px;

  [data-theme="dark"] & {
    background: linear-gradient(
      90deg,
      #2a2a2a 25%,
      #3a3a3a 50%,
      #2a2a2a 75%
    );
    background-size: 200% 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--border-color);
  }
`;

const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

const SkeletonTitle = styled(SkeletonBase)`
  height: 20px;
  width: 80%;
  margin: 0.25rem 0;

  ${props => props.short && css`
    width: 60%;
  `}
`;

const SkeletonDescription = styled(SkeletonBase)`
  height: 16px;
  width: 90%;
  margin: 0.25rem 0;

  ${props => props.short && css`
    width: 70%;
  `}
`;

const SkeletonPrice = styled(SkeletonBase)`
  height: 18px;
  width: 50%;
  margin: 0.5rem 0;
`;

const SkeletonRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  margin: 0.5rem 0;
  height: 24px;
`;

const SkeletonStar = styled(SkeletonBase)`
  width: 20px;
  height: 20px;
  border-radius: 2px;
`;

const SkeletonRatingText = styled(SkeletonBase)`
  height: 16px;
  width: 30px;
`;

const SkeletonButton = styled(SkeletonBase)`
  height: 44px;
  width: 100%;
  border-radius: 8px;
  margin-top: auto;
`;

export const Skeleton = () => {
    // Generate unique IDs for skeleton items
    const skeletonItems = Array.from({ length: 8 }, (_, index) => ({
        id: `skeleton-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));

    return (
        <GridCards>
            {skeletonItems.map((item) => (
                <SkeletonCard key={item.id}>
                    <SkeletonImageContainer>
                        <SkeletonImage />
                    </SkeletonImageContainer>
                    <SkeletonTitle />
                    <SkeletonTitle short />
                    <SkeletonDescription />
                    <SkeletonDescription short />
                    <SkeletonPrice />
                    <SkeletonRating>
                        <SkeletonStar />
                        <SkeletonStar />
                        <SkeletonStar />
                        <SkeletonStar />
                        <SkeletonStar />
                        <SkeletonRatingText />
                    </SkeletonRating>
                    <SkeletonButton />
                </SkeletonCard>
            ))}
        </GridCards>
    );
};