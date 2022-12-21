import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { imageUrl, title, linkUrl } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(linkUrl);
  return (
    <div className="category-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
