import List from "./List";
import data from "./data";
import { useState } from "react";
const Home = () => {
  const [people, setPeople] = useState(data);
  const handleSort = () => {
    console.log("handleSort");
    const sortedData = people.sort((a, b) => a.age - b.age);
    console.log("sortedData", sortedData);
    setPeople(sortedData);
  };
  return (
    <div>
      <h2>No of person {people.length}</h2>
      <List people={people} />
      <button onClick={handleSort}>Sort by age</button>
    </div>
  );
};
export default Home;
