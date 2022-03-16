export const UnorderedList = ({ interests }) => {
  return (
    <ol>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ol>
  );
};
