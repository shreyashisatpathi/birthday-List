import styles from "./List.module.css";
const List = ({ people }) => {
  return (
    <div className={styles.card}>
      List of people
      {people.map((person) => (
        <div className={styles.person} key={person.id}>
          <span> {person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
export default List;
