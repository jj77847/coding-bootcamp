// Stateless component
export const CardBody = ({ count, handleDecrement, handleIncrement }) => (
  <div className="card-body">
    <h2 className="card-text">Click Count: {count}</h2>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
        disabled={count === 0}
      >
        Decrement
      </button>
    </div>
  </div>
);
