import { Greeting } from "./components/Greeting";

export const App = () => (
  <Greeting
    message="Welcome the following students to class!"
    students={["John", "Grace", "Jared"]}
  />
);
