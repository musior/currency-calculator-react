import { useState } from "react";
import Form from "../form/Form";
import Loader from "../loader/Loader";
import "./Main.css";

const Main = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSetResult = (result) => {
    setResult(result);
  };

  const handleSetIsLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  const handleError = (showError) => {
    setShowError(showError);
  };

  return (
    <main id="main" className="main">
      <Form
        setResult={handleSetResult}
        setIsLoading={handleSetIsLoading}
        setShowError={handleError}
      />
      <div className="main-currency-convertion">
        {showError ? (
          <p>Something go wrong, please come back later!</p>
        ) : isLoading ? (
          <Loader />
        ) : (
          <p>It's {result} PLN.</p>
        )}
        {/*isLoading ? <Loader /> : <p>It's {result} PLN.</p>*/}
      </div>
    </main>
  );
};

export default Main;
