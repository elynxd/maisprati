import "./App.css";

function App() {
    return (
        <AuthProvider user={{ name: "Eliandro" }}>
            <Header />
        </AuthProvider>
    );
}

export default App;
