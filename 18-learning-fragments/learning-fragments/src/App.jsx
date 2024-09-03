import { FoodItems } from "./components/FoodItems";
import { ErrorMsg } from "./components/ErrorMsg";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Roti", "Vegetables", "Salad", "Milk"];

  return (
    <>
      <h1>List of healthy food items</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
