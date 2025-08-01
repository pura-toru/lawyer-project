const Home= () => {
  return (
    <div className="scroll-container">
      {[...Array(10)].map((_, i) => (
        <div className="scroll-item" key={i}>
          Item {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Home;
