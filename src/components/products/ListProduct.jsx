import React, { useEffect, useState } from 'react';

const ListProduct = ({ readProduct, product, deleteProduct }) => {

    useEffect(() => {
        readProduct()
    }, [])



    //! PAGINATION
    // const [page, setPage] = useState(1);
    // let itemPerPage = 9;
    // const count = Math.ceil(product.length / itemPerPage)

    // function currentPage () {
    //     const start = (page - 1) * itemPerPage;
    //     const end = start + itemPerPage;
    //     return product.slice(start, end)
    // }
    //! PAGINATION

    return (
        <>
           <div className='main-cart'>
            <div className="container">
                <div className="main-block">
                {
                product.map((el, index) => (
                    <div key={index} className="cart">
                        <img src={el.photo} alt="image" />

                        <div className="text-content">
                        <p>{el.name}</p>
                        <p>{el.price}$</p>
                        </div>
                        
                        <div className="buttons">
                            <button>Order</button>
                            <button onClick={() => deleteProduct(el.id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
                </div>
            </div>
        </div>
        
        </>
    );
};

export default ListProduct;