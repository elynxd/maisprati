import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { useTheme } from "./context/ThemeProvider.jsx";
import { ProductCard } from "./components/ProductCard/ProductCard.jsx";
import { mockProducts } from "./utils/mockProducts.js";
import { Skeleton } from "./components/Skeleton/Skeleton.jsx";
import { ErrorMsg } from "./components/ErrorMsg.jsx";

import styles from "./App.module.css";

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
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        {error && <ErrorMsg message={error.message} />}
        {loading ? (
          <div className={styles.loadingContainer}>
            <Skeleton />
          </div>
        ) : (
          <div className={styles.gridCards}>
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
          </div>
        )}
      </main>
    </div>
  );
}
