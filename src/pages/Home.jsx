import axios from 'axios';
import { useEffect, useState } from 'react';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/?limit=10')
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => console.log(error));
    }, [])

    return (
        <ItemListContainer products={products} />
    );
};

export default Home