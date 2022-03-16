export const Card = ({ name, description, id }) => {
  const cardStyle = {
    width: "18rem",
  };

  const randomWidth = () => {
    const number = Math.floor(Math.random() * (300 - 200) + 200);
    return number;
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">ID: {id}</p>
          <a href="/" className="btn btn-primary">
            Adopt {name}
          </a>
        </div>
      </div>
    </div>
  );
};
