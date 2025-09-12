import { useState } from "react";

export function Product() {
    const[products, setProducts] = useState([])
    const[productName, setProductName] = useState('')
    const[productPrice, setProductPrice] = useState('')
    const[category, setCategory] = useState('acessorios')
    const[productDescription, setProductDescription] = useState('')
    const[error, setError] = useState('')
    const[categoryFilter, setCategoryFilter] = useState('all')

    const handleNameChange = (e) => setProductName(e.target.value)
    const handlePriceChange = (e) => setProductPrice(e.target.value)
    const handleCategoryChange = (e) => setCategory(e.target.value)
    const handleDescriptionChange = (e) => setProductDescription(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(productName === '' || !productPrice || !productDescription) {
            setError('Por favor, preencha todos os campos.')
            return
        }

        if(isNaN(productPrice) || Number(productPrice) <= 0) {
            setError('Por favor, insira um preço válido.')
            return
        }

        setError('')

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice).toFixed(2),
            category,
            description: productDescription,
        }

        setProducts([...products, newProduct])

        setProductName('')
        setProductPrice('')
        setProductDescription('')
    }

    const handleRemoveProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id)
        setProducts(updatedProducts)
    }

    const filteredProducts = products.filter((product) => categoryFilter === 'all' || product.category === categoryFilter)


    return (
        <>
        <h2>Cadastra produto:</h2>
        <form 
        style={{ display: "flex", flexDirection: "column", gap: "24px"}}
        onSubmit={handleSubmit}>
            <div
                style={{display: "flex", flexDirection: "column", gap: "8px"}}
            >
                <label>nome:</label>
                <input type="text" value={productName} onChange={handleNameChange}/>
            </div>
            <div
                style={{display: "flex", flexDirection: "column", gap: "8px"}}
            >
                <label>preço:</label>
                <input type="text" value={productPrice} onChange={handlePriceChange}/>
            </div>
            <div
                style={{display: "flex", flexDirection: "column", gap: "8px"}}
            >
                <label>categoria:</label>
                <select type="select" value={category} onChange={handleCategoryChange}>
                    <option value="acessorios">acessorios</option>
                    <option value="computadores">computadores</option>
                    <option value="celulares">celulares</option>
                </select>
            </div>
            <div
                style={{display: "flex", flexDirection: "column", gap: "8px"}}
            >
                <label>descrição:</label>
                <textarea name="description" value={productDescription} onChange={handleDescriptionChange} id="desc"></textarea>
            </div>

            <button type="submit">cadastrar produto</button>
        </form>

        {error && <p style={{color: "red", marginTop: "16px"}}>{error}</p>}


        <label style={{marginTop: "32px"}}>Filtrar por categoria:</label>
        <select 
        style={{marginTop: "8px"}}
        onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="acessorios">Acessórios</option>
            <option value="computadores">Computadores</option>
            <option value="celulares">Celulares</option>
        </select>

        <ul
        style={{marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0, fontSize: "18px", lineHeight: "16px"}} 
        >
            {filteredProducts.map((product) => (
                <li 
                style={{border: "1px solid #ccc", borderRadius: "8px", padding: "16px"}}
                key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <button 
                    style={{marginTop: "8px"}}
                    onClick={() => handleRemoveProduct(product.id)}>remover produto</button>
                </li>
            ))}

        </ul>
        </>
    )

}