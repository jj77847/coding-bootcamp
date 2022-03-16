import { useState } from "react";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

// Stateful component
export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card text-center">
      <CardHeader title="Click Counter!" count={count} />
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
