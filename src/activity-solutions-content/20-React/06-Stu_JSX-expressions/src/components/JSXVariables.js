export const JSXVariables = () => {
  const name = "Bob Smith";
  const thoughts = ["good", "easy", "fun"];

  const getNumberOfLetters = (fullName) => {
    const names = fullName.split(" ");

    const nameLengths = names.map((name) => {
      return name.length;
    });

    return nameLengths.join(" | ");
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {getNumberOfLetters(name)} letters</h2>
          <h2>I think React is: {thoughts.join(", ")}</h2>
        </div>
      </div>
    </div>
  );
};
