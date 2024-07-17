function App() {
  return (
    <div className="App">
      <img src="https://picsum.photos/300/300" />
      <div>이미지 태그다</div>

      <img src="https://picsum.photos/2000/3000" />
      <div>큰 이미지다</div>

      {new Array(10).fill(30).map(() => (
        <img src="https://picsum.photos/4000/3000" />
      ))}

      {new Array(10).fill(30).map(() => (
        <img src="https://picsum.photos/4000/3000" />
      ))}
    </div>
  );
}

export default App;
