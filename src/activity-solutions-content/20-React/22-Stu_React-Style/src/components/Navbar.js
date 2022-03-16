import "../styles/Navbar.css";

export const Navbar = () => {
  const navbarStyles = {
    nav: {
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "green",
      padding: "0px 20px",
    },
  };

  return (
    <nav style={navbarStyles.nav} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
};
