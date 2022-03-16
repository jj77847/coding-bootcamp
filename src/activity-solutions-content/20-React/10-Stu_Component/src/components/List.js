import { ListItem } from "./ListItem";

export const List = ({ groceries }) => (
  <ul className="list-group">
    {groceries.map((grocery) => (
      <ListItem {...grocery} key={grocery.id} />
    ))}
  </ul>
);
