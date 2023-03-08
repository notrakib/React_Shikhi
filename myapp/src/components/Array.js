const Array = () => {
  const array = [
    { id: "asfafeswdsef", name: "Khalid" },
    { id: "asfafeswdaef", name: "Shohan" },
    { id: "asf2afeswdef", name: "Iram" },
  ];

  return (
    <>
      {array.map((each, index) => {
        console.log(index);
        return <h1 key={each.id}>Second Button</h1>;
      })}
    </>
  );
};

export default Array;
