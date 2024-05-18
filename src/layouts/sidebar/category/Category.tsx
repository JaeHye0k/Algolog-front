import { category } from "../../../styles/sidebar.css";

const categories: string[] = ["Algorithm", "Develop", "Interest"];

const Category: React.FC = () => {
  return (
    <ul className={category}>
      {categories.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default Category;
