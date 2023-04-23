import { useState } from "react";
import Form from "./Form";
import Loader from "./Loader";

const Main = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSetResult = (result) => {
    setResult(result);
  };

  const handleSetIsLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  return (
    <main id="main">
      <Form setResult={handleSetResult} setIsLoading={handleSetIsLoading} />
      <div className="main-currency-convertion">
        {isLoading ? <Loader /> : <p>It's {result} PLN.</p>}
      </div>
    </main>
  );
};

export default Main;
