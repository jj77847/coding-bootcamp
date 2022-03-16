import classNames from "classnames";

export const CardHeader = ({ title, count }) => (
  <div
    className={classNames("card-header", "text-white", {
      "bg-primary": count % 5 !== 0 && count !== 0,
      "bg-danger": count % 5 === 0 && count !== 0,
      "bg-warning": count === 0,
    })}
  >
    {title}
  </div>
);
