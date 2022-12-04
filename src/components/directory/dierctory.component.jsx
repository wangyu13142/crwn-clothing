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