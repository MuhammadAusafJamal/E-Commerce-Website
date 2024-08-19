import { useSelector } from "react-redux";
import Button from "./button.jsx";

export default function CartList() {
    const { carts, status, error } = useSelector((state) => state.cart);
    console.log("cart------", carts)


    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD Cart App</h1>
            </div>
            <Button />

            {/* Handle loading and error states */}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

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
                            carts && carts.length > 0 ? (
                                carts.map(({ id, userId, products }) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{userId}</td>
                                            <td>{products.map(p => `Product Id: ${p.productId}`).join(', ')}</td>
                                            <td>
                                                <button
                                                    // onClick={() => dispatch(deleteCarts(1))}
                                                    className="button-primary"
                                                >
                                                    Delete Cart
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    // onClick={() => dispatch(deleteCarts())}
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
