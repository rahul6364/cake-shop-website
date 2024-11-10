import { useParams } from 'react-router-dom';
import cakesData from '../data/cakesData';

const CakeDetails = () => {
    const { cakeId } = useParams();
    const cake = cakesData.find(cake => cake.id === parseInt(cakeId));

    if (!cake) return <h2>Cake Not Found</h2>;

    return (
        <div>
            <h2>{cake.name}</h2>
            <p>Ingredients: {cake.ingredients}</p>
            <p>Price: ${cake.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default CakeDetails;
