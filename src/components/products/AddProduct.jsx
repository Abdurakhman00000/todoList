import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {

    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');


    function handleSubmit () {
        let newObject = {
            photo: photo,
            name: name,
            price: price,
            id: Date.now(),
        };
        addProduct(newObject);
    }


    return (
        <div className='add'>
            <div className="container">
                <div className="add-block">
                    <h1>CREATE PRODUCT</h1>
                    <input onChange={(e) => setPhoto(e.target.value)} type="text" placeholder='photo link URL'/>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='food name'/>
                    <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='price'/>
                    <button onClick={handleSubmit}>create</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;