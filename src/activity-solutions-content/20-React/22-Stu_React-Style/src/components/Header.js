import "../styles/Header.css";

export const Header = () => {
  const headerStyles = {
    header: {
      backgroundColor: "red",
    },
    h1: {
      fontSize: "100px",
    },
  };

  return (
    <header style={headerStyles.header} className="header">
      <h1 style={headerStyles.h1}>Welcome</h1>
    </header>
  );
};
