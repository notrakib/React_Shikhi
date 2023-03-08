const Button = (props) => {
  const EventHandaler = () => {
    console.log(1);
  };

  const color = 3;

  const showButton = true;
  console.log(props);
  return (
    <>
      {showButton && (
        <button
          style={{ backgroundColor: color === 2 ? "red" : "white" }}
          onClick={EventHandaler}
        >
          Press
        </button>
      )}
    </>
  );
};

export default Button;
