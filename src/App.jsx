import { useState } from "react";

const App = () => {
  const [clickedOrder, setClickedOrder] = useState([]); 
  const [boxColors, setBoxColors] = useState(Array(9).fill("white")); 

  const handleClick = (index) => {
    if (index === 8) {
      const newColors = [...boxColors];
      clickedOrder.forEach((clickedIdx, i) => {
        setTimeout(() => {
          newColors[clickedIdx] = "orange";
          setBoxColors([...newColors]);
        }, i * 300);
      });
      return;
    }

    if (clickedOrder.includes(index)) return;

    const newColors = [...boxColors];
    newColors[index] = "green";
    setBoxColors(newColors);

    setClickedOrder([...clickedOrder, index]);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "10px" }}>
      {boxColors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            border: "1px solid black",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        />
      ))}
    </div>
  );
};

export default App;
