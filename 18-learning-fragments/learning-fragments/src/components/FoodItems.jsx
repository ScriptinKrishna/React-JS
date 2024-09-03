import { Item } from "./Item";

export const FoodItems = ({items}) => {
  let foodItems = ["Dal", "Roti", "Vegetables", "Salad", "Milk"];
  // let foodItems = [];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};
