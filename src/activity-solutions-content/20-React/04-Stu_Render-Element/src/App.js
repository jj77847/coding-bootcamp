import { HelloDiv } from "./components/HelloDiv";
import { UnorderedList } from "./components/UnorderedList";

const interests = ["travelling", "hiking", "cooking", "coding"];

export const App = () => {
  return (
    <>
      <HelloDiv creatorName="Bob Smith" />
      <UnorderedList interests={interests} />
    </>
  );
};
