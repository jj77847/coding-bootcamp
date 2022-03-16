import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search For a Movie"
          id="search"
          name="searchInput"
          onChange={onChange}
          value={value}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={value ? false : true}>
        Search
      </Button>
    </Form>
  );
};
