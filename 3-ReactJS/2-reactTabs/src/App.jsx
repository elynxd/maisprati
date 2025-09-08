import { useState } from "react";
import "./App.css";

const tabs = [
    { id: 0, name: "Tab 1", content: <p>Tab 1 content</p> },
    { id: 1, name: "Tab 2", content: <p>Tab 2 content</p> },
    { id: 2, name: "Tab 3", content: <p>Tab 3 content</p> },
];

function App() {
    const Tabs = () => {
        return (
            <div>
                <ul
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexDirection: "row",
                    }}
                >
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            style={{ padding: "10px", listStyle: "none" }}
                        >
                            <button onClick={() => setContent(tab.content)}>
                                {tab.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const [content, setContent] = useState(tabs[0].content);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                }}
            >
                <Tabs tabs={tabs} />
                <div>{content}</div>
            </div>
        </>
    );
}

export default App;
