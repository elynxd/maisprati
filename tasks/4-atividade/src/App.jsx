import './App.css';
import { Heart } from 'phosphor-react';

function App() {

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
      <p className="text-3xl font-bold text-red-500">
        Hello world!
        <span className="inline-block ml-2 animate-pulse">
           <Heart size={32} />
        </span>
      </p>
      
      </div>
    </>
  )
}

export default App
