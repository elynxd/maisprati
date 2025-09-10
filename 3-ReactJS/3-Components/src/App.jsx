import './App.css'
import { Product } from './components/Product'
import { Increase } from './components/Increase'
import { IncreaseFunc } from './components/IncreaseFunc'
import { LifeCycleFunctionalComponent } from './components/LifeCycleFunctionalComponent'

export function App() {
  const newProducts = [
    { name: "Headset", price: 2995.99, description: "Headset gamer com som surround." },
    { name: "Laptop", price: 89.99, description: "Laptop gamer com alta precisão." },
    { name: "Smartphone", price: 179.99, description: "Smartphone com câmera de alta resolução." }
  ]

  return (
    <>
      <h1>Product List</h1>
      <Product name="Monitor" price={199.99} description="Monitor 4K com alta definição." />
      <Product name="Keyboard" price={49.99} description="Teclado mecânico com iluminação RGB." />
      <Product name="Mouse" price={29.99} description="Mouse ergonômico com alta precisão." />

      <h2>New Products</h2>
      {newProducts.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} description={product.description} />
      ))}

      <Increase />
      <IncreaseFunc />

      <h1>LifeCycleComponent</h1>
      <LifeCycleFunctionalComponent />

      <footer>
        <p>© 2023 My E-commerce Store</p>
      </footer>
    </>
  )
}
