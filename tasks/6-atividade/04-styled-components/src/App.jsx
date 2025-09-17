import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { useTheme } from "./context/ThemeProvider.jsx";
import { ProductCard } from "./components/ProductCard/ProductCard.jsx";
import { mockProducts } from "./utils/mockProducts.js";
import { Skeleton } from "./components/Skeleton/Skeleton.jsx";
import { ErrorMsg } from "./components/ErrorMsg.jsx";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 2rem 1rem;
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

const fetchProducts = () => {
  return new Promise((resolveProducts, reject) => {
    try {
      setTimeout(() => {
        resolveProducts(mockProducts);
      }, 3000);
    } catch (err) {
      reject(new Error("Failed to fetch products", err));
    }
  });
};

export function App() {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Main>
        {error && <ErrorMsg message={error.message} />}
        {loading ? (
          <LoadingContainer>
            <Skeleton />
          </LoadingContainer>
        ) : (
          <GridCards>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                badge={product.badge}
                img={product.img}
              />
            ))}
          </GridCards>
        )}
      </Main>
    </AppContainer>
  );
}
