import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { IncrementBtn, DecrementBtn } from "./quantityBtn.jsx";

import {
    getCartTotal,
    deleteItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../../slices/userCartSlice.js";

export default function Cart() {
    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.cart
    );
    console.log(cart)

    // console.log(cart)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
        console.log(cart)
    }, [cart, dispatch]);

    return (
        <div>
            <Link to={'/'}>
                <div>Go Back</div>
            </Link>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">You have {totalQuantity} items in cart</h5>
                                </div>
                                <div className="card-body">
                                    {cart?.map((data) => (
                                        <div key={data.id} className="row">
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div
                                                    className="bg-image hover-overlay hover-zoom ripple rounded"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    <img
                                                        src={data.image}
                                                        className="w-100"
                                                        alt={data.title}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                <p>
                                                    <strong>{data.title}</strong>
                                                </p>

                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm me-1 mb-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Remove item"
                                                    onClick={() => dispatch(deleteItem(data.id))}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>

                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                <div
                                                    className="d-flex mb-4"
                                                    style={{ maxWidth: "300px" }}
                                                >
                                                    <button
                                                        className="btn btn-primary px-3 me-2"
                                                        onClick={() =>
                                                            dispatch(decreaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    {/* <DecrementBtn
                                                        dispatch={dispatch()}
                                                        reducer={decreaseItemQuantity()}
                                                        dataId={data.id}
                                                    /> */}
                                                    <div className="form-outline">
                                                        <h6
                                                            id="form1"
                                                            min="0"
                                                            name="quantity"
                                                            type="number"
                                                            className="form-control"
                                                            onChange={() => null}>
                                                            {data.quantity}

                                                        </h6>
                                                        {/* <label className="form-label" htmlFor="form1">
                                                            Quantity
                                                        </label> */}
                                                    </div>

                                                    <button
                                                        className="btn btn-primary px-3 ms-2"
                                                        onClick={() =>
                                                            dispatch(increaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                    {/* <IncrementBtn
                                                        dispatch={dispatch()}
                                                        reducer={increaseItemQuantity()}
                                                        dataId={data.id}
                                                    /> */}
                                                </div>

                                                <p className="text-start text-md-center">
                                                    <strong>{data.price}</strong>
                                                </p>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Quantity
                                            <span>{totalQuantity}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span>
                                                <strong>{totalPrice}</strong>
                                            </span>
                                        </li>
                                    </ul>

                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg btn-block"
                                    >
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

