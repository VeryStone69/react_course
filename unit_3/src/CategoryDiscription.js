import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



function CategoryDiscription() {
    let { categoryName } = useParams();
    return (
        <>
            <Link to="/cat">Назад</Link>
            <h1>Category: {categoryName}</h1>
        </>
    );
}

export default CategoryDiscription;