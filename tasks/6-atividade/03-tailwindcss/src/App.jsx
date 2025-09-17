import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { useTheme } from "./context/ThemeProvider.jsx";
import { ProductCard } from "./components/ProductCard/ProductCard.jsx";
import { mockProducts } from "./utils/mockProducts.js";
import { Skeleton } from "./components/Skeleton/Skeleton.jsx";
import { ErrorMsg } from "./components/ErrorMsg.jsx";

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
    <div className="flex min-h-screen w-screen flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar />
      <main className="flex flex-1 flex-col">
        {error && <ErrorMsg message={error.message} />}
        {loading ? (
          <div className="flex min-h-[50vh] items-center justify-center px-4 py-8">
            <Skeleton />
          </div>
        ) : (
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:gap-6 sm:p-4 md:grid-cols-3 md:gap-8 md:p-6 lg:grid-cols-4 lg:gap-8 lg:p-8">
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
