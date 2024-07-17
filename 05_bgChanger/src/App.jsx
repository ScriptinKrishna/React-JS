import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("#fff");
  return (
    <>
      <div
        className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-md">
            <Button name="Red" bg="#eb3434" setColor={() => setColor("#eb3434")} />
            <Button name="Green" bg="#20c40e" setColor={() => setColor("#20c40e")} />
            <Button name="Blue" bg="#0e0ec4" setColor={() => setColor("#0e0ec4")} />
            <Button name="Orange" bg="#de6b0d" setColor={() => setColor("#de6b0d")} />
            <Button name="White" bg="#fff" setColor={() => setColor("#fff")} />
            <Button name="Black" bg="#000" setColor={() => setColor("#000")} />
            <Button name="Pink" bg="#f005d8" setColor={() => setColor("#f005d8")} />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
