<<<<<<< HEAD
import CategoryItem from "../category-item/category-item.component";
import "./dierctory.styles.scss";
const categories = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="catogories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </div>
  );
};
export default Directory;
=======
import CategoryItem from '../category-item/category-item.component'
import './dierctory.styles.scss'
const Directory = ({categories}) => {
    return (
        <div className="catogories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}></CategoryItem>
            ))}

        </div>
    )
}
export default Directory;
>>>>>>> 1be1957 (updating our directory page with directory component and category item component)
