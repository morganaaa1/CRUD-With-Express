import {useState, useEffect} from 'react'
import axios from 'axios';

const ProductList = () => {

    const [products, setProduct] = useState([]);

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = async () => {
        const respone = await axios.get('http://localhost:5000/product');
        setProduct(respone.data);
    }

    return (
        <div>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                    <tr>
                        <td>{ index + 1 }</td>
                        <td>{ product.title }</td>
                        <td>{ product.price }</td>
                        <td>
                            <button className='button is-small is-info'>Edit</button>
                            <button className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList