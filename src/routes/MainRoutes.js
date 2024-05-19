import React, { useState } from 'react';
import AddProduct from '../components/products/AddProduct';
import ListProduct from '../components/products/ListProduct';
import { Route, Routes } from 'react-router-dom';
import Support from '../components/products/Support';

const MainRoutes = () => {

    //! TODO
    const [product, setProduct] = useState([]);
    function addProduct(newProduct) {
        let data = JSON.parse(localStorage.getItem('product')) || [];
        data.push(newProduct)
        localStorage.setItem('product', JSON.stringify(data))
    }


    function readProduct() {
        let data = JSON.parse(localStorage.getItem('product')) || [];
        setProduct(data)
    }

    function deleteProduct(id) {
        let data = JSON.parse(localStorage.getItem('product')) || [];
        let result = data.filter((el) => el.id !== id)
        localStorage.setItem('product', JSON.stringify(result))
        readProduct()

    }
    //! TODO


    const ROUTES = [
        {
            link: '/addProduct',
            element: <AddProduct  addProduct={addProduct}/>,
            id: 1,
        },

        {
            link: '/listProduct',
            element: <ListProduct readProduct={readProduct} product={product} deleteProduct={deleteProduct}/>,
            id: 2,
        },

        {
            link: '/support',
            element: <Support />,
            id: 3,
        }
    ];


    return (
        <Routes>
            {
                ROUTES.map((item) => (
                    <Route path={item.link} element={item.element} key={item.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;