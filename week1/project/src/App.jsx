import "./App.css";
import data from "./fake-data/all-categories.js";
import CategoryRenderer from "./CategoryRenderer.jsx";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Products</h1>
      <>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <CategoryRenderer items={data} />
      </>
    </>
  );
}

export default App;
