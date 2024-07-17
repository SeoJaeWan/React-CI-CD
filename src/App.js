function App() {
  return (
    <div className="App">
      <img src="https://picsum.photos/300/300" alt="" />
      <div>이미지 태그다</div>

      <img src="https://picsum.photos/2000/3000" alt="" />
      <div>큰 이미지다</div>

      {new Array(10).fill(30).map(() => (
        <img src="https://picsum.photos/4000/3000" alt="" />
      ))}

      {new Array(10).fill(30).map(() => (
        <img src="https://picsum.photos/4000/3000" alt="" />
      ))}
    </div>
  );
}

export default App;
