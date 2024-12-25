import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState();

  const makeApiCall = async () => {
    const data = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    const json = await data.json();
    console.log(json.results[0]);
    setData(json.results[0]);
  };
  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div className="flex p-10 gap-10 flex-wrap">
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
    </div>
  );
}

export default App;
