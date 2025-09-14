import "./App.css";
import { useTheme } from "./context/themeProvider";
import { Header } from "./components/Header";

function App() {
    const { theme } = useTheme();
    console.log("Current theme in App:", theme);

    return (
    <>
      <Header />
      <div style={{
         display: 'flex', justifyContent: 'center', 
         alignItems: 'center', 
         width: '100vw', height: '100vh',
         background: theme === 'light' ? 'lightgray' : 'black',
         color: theme === 'light' ? '#333' : 'white',
         transition: 'background 0.3s ease, color 0.3s ease'
                }}>
      </div>
    </>
  );
}

export default App;
