import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function App() {
  const [counter,setCounter] = useState(0);

  const increment = () => {
    setCounter(counter+1);
  };

  const decrement = () => {
    setCounter(counter-1);
  };

  return (
    <div className="text-center">
      <Container className=" border border-5 mt-5 pt-5">
        <h1 className="text-center">Counter App</h1>
        <h1 className="text-center">{counter}</h1>
        <div>
        <Button className="mx-2 px-5 "variant="outline-success" onClick={increment}><h1>+</h1></Button>
        <Button className="mx-2 px-5 "variant="outline-danger" onClick={decrement}><h1>-</h1></Button>
        </div>
      </Container>

    </div>
  )
}
