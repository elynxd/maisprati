import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[endereco, setEndereco] = useState("")
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState(null)
  const[cep, setCep] = useState("") 
  const[fetchControl, setFetchControl] = useState(false)

  useEffect(() => {
    if(fetchControl && cep.length === 8) {
      setLoading(true)
      setEndereco("")
      setError(null)
      
      console.log("useEffect executed, (mounted or updated CEP)")
      
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => {
      const data = res.data

      if (data.err) {
        throw new Error("CEP não encontrado, tente novamente!")
      }
      setEndereco(data)
      setCep("")
    })
    .catch(err => {
      setError(err.message)
      setEndereco("")
    })
    .finally(() => {
      setLoading(false)
      setFetchControl(false)
    })
  }
  }, [cep, fetchControl])
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (cep.length !== 8) {
      setError("CEP deve ter 8 dígitos")
      return
    }
    setFetchControl(true)
  }
 
    return (
      <div>

      <h2>Buscar CEP:</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder='Digite o CEP (ex: 18685000)'
        maxLength="8"
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Buscando...' : ' Buscar'}
        </button>
      </form>

      {error && <p style={{color: 'red'}}>Erro: {error}</p>}

      {endereco && (
        <div key={endereco.id}>
        <h2>Resultado:</h2>
        <p>CEP: {endereco.cep}</p>
        <p>Logradouro: {endereco.logradouro}</p>
        <p>Bairro: {endereco.bairro}</p>
        <p>Cidade: {endereco.localidade}</p>
        <p>UF: {endereco.uf}</p>
      </div>
      )}
    </div>
  )
}

export default App
