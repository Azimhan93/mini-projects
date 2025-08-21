import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  const countStyle = {
    color: count % 2 === 0 ? "green" : "red",
    fontWeight: "bold"
  };

  const likeStyle = {
    color: like > 5 ? "blue" : "black",
    fontWeight: "bold" 
  }

  return (
    <div>
      <h1>Привет, я учусь React!</h1>
      <p>{count === 0 ? "Ещё никто не нажал кнопку 😢" : "Молодец, продолжай нажимать 😅"}</p>
      <p style={countStyle}>Кликнули: {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
      <p style={likeStyle}>Лайкнули: {like} раз</p>
      <p>{like > 5 ? "Популярный пост! 👍" : "Поставь больше лайков 😅"}</p>
      <button onClick={() => setLike(like + 1)}>Нажми меня</button>
      <p>Очищаем счетчики</p>
      <button onClick={() => {
        setLike(0);
        setCount(0);
      }}>
        Очистить
      </button>
    </div>
  );
}

export default App;
