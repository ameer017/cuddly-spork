import { useState } from "react";
import News from "./Components/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <News />
    </>
  );
}

export default App;
