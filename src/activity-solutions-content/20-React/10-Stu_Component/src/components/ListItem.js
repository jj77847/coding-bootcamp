import classNames from "classnames";

export const ListItem = ({ name, purchased }) => (
  <li
    className={classNames("list-group-item", {
      "list-group-item-success": purchased,
    })}
  >
    {name}
  </li>
);
