import { fetchCart, deleteCarts } from "./userCartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CartList() {
    const dispatch = useDispatch();
    const [data,setData] = useState();
    // const cart = useSelector((state) => state.usercart);

    const handleClick = async () => {
        setData(await fetchCart())
        // console.log('data', data)
    }

    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD Cart App</h1>
            </div>
            <div className="row">
                <div className="two columns">
                    <button
                        onClick={() => (handleClick())}
                        className="button-primary"
                    >
                        Load Carts
                    </button>
                </div>
                <div className="two columns">
                    <button className="button-primary">Add to cart</button>
                </div>
            </div>

            {/* Handle loading and error states */}
            {/* {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>} */}

            <div className="row">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Id</th>
                            <th>Products ID</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0 ? (
                                data.map(({ id, userId, products }) => {
                                    // console.log('item ---', userId)
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{userId}</td>
                                            <td>{products.map(p => `Product Id: ${p.productId}`).join(', ')}</td>
                                            <td>
                                                <button
                                                    onClick={() => dispatch(deleteCarts(1))}
                                                    className="button-primary"
                                                >
                                                    Delete Cart
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => dispatch(deleteCarts(1))}
                                                    className="button-primary"
                                                >
                                                    Edit Cart
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4">No carts available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
