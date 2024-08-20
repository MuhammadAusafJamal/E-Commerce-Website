import './productPage.css';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../slices/userCartSlice.js";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
    const dispatch = useDispatch();
    const { cart, items, totalQuantity } = useSelector((state) => state.cart);
    console.log("items------", items)
    console.log("cart------", cart)

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch]);
    return (
        <>
            {/* Navbar */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                {/* Container wrapper */}
                <div className="container">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        {/* Navbar brand */}
                        <a
                            className="navbar-brand mt-2 mt-sm-0"
                            href="https://mdbootstrap.com/"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height={20}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link " href="https://mdbootstrap.com/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://mdbootstrap.com/docs/standard/"
                                >
                                    About MDB
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://mdbootstrap.com/docs/standard/getting-started/installation/"
                                >
                                    Free download
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://mdbootstrap.com/education/bootstrap/"
                                >
                                    Free tutorials
                                </a>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Icon */}
                        {/* <a className="nav-link me-3" href="/cart"> */}
                        <Link className="nav-link me-3" to={'/cart'}>
                            <i className="fas fa-shopping-cart" />
                            {
                                cart.length > 0
                                    ?
                                    <span className="badge rounded-pill badge-notification bg-danger">
                                        {totalQuantity}
                                    </span>
                                    :
                                    null
                            }
                        </Link>
                        {/* </a> */}
                        <a className="nav-link me-3" href="#">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="nav-link me-3" href="#">
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            href="https://github.com/mdbootstrap/bootstrap-material-design"
                            className="border rounded px-2 nav-link"
                            target="_blank"
                        >
                            <i className="fab fa-github me-2" />
                            GitHub
                        </a>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
            {/* carousel */}
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg"
                            className="d-block w-100"
                            alt="Wild Landscape"
                        />
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        />
                        <div className="carousel-caption d-none d-sm-block mb-5">
                            <h1 className="mb-4">
                                <strong>Learn Bootstrap 5 with MDB</strong>
                            </h1>
                            <p>
                                <strong>Best &amp; free guide of responsive web design</strong>
                            </p>
                            <p className="mb-4 d-none d-md-block">
                                <strong>
                                    The most comprehensive tutorial for the Bootstrap 5. Loved by over
                                    3 000 000 users. Video and written versions available. Create your
                                    own, stunning website.
                                </strong>
                            </p>
                            <a
                                target="_blank"
                                href="https://mdbootstrap.com/education/bootstrap/"
                                className="btn btn-outline-white btn-lg"
                            >
                                Start free tutorial
                                <i className="fas fa-graduation-cap ms-2" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg"
                            className="d-block w-100"
                            alt="Camera"
                        />
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h1 className="mb-4">
                                <strong>Learn Bootstrap 5 with MDB</strong>
                            </h1>
                            <p>
                                <strong>Best &amp; free guide of responsive web design</strong>
                            </p>
                            <p className="mb-4 d-none d-md-block">
                                <strong>
                                    The most comprehensive tutorial for the Bootstrap 5. Loved by over
                                    3 000 000 users. Video and written versions available. Create your
                                    own, stunning website.
                                </strong>
                            </p>
                            <a
                                target="_blank"
                                href="https://mdbootstrap.com/education/bootstrap/"
                                className="btn btn-outline-white btn-lg"
                            >
                                Start free tutorial
                                <i className="fas fa-graduation-cap ms-2" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg"
                            className="d-block w-100"
                            alt="Exotic Fruits"
                        />
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h1 className="mb-4">
                                <strong>Learn Bootstrap 5 with MDB</strong>
                            </h1>
                            <p>
                                <strong>Best &amp; free guide of responsive web design</strong>
                            </p>
                            <p className="mb-4 d-none d-md-block">
                                <strong>
                                    The most comprehensive tutorial for the Bootstrap 5. Loved by over
                                    3 000 000 users. Video and written versions available. Create your
                                    own, stunning website.
                                </strong>
                            </p>
                            <a
                                target="_blank"
                                href="https://mdbootstrap.com/education/bootstrap/"
                                className="btn btn-outline-white btn-lg"
                            >
                                Start free tutorial
                                <i className="fas fa-graduation-cap ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/*Main layout*/}
            <main>
                <div className="container">
                    {/* Navbar */}
                    <nav
                        className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2"
                        style={{ backgroundColor: "#607D8B" }}
                    >
                        {/* Container wrapper */}
                        <div className="container-fluid">
                            {/* Navbar brand */}
                            <a className="navbar-brand" href="#">
                                Categories:
                            </a>
                            {/* Toggle button */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent2"
                                aria-controls="navbarSupportedContent2"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars" />
                            </button>
                            {/* Collapsible wrapper */}
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent2"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* Link */}
                                    <li className="nav-item acitve">
                                        <a className="nav-link text-white" href="#">
                                            All
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Shirts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Sport wears
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Outwears
                                        </a>
                                    </li>
                                </ul>
                                {/* Search */}
                                <form className="w-auto py-1" style={{ maxWidth: "12rem" }}>
                                    <input
                                        type="search"
                                        className="form-control rounded-0"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </form>
                            </div>
                        </div>
                        {/* Container wrapper */}
                    </nav>
                    {/* Navbar */}
                    {/* Products */}
                    <section>
                        <div className="text-center">
                            <div className="row">
                                {
                                    items.map((item) => {
                                        return (
                                            <div key={item.id} className="col-lg-3 col-md-6 mb-4">
                                                <div className="card">
                                                    <a href="">
                                                        <div
                                                            className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                            data-mdb-ripple-color="light"
                                                        >
                                                            <img
                                                                src={item.image}
                                                                className="w-100"
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-title mb-2">{item.title}</h5>
                                                            <p>{item.description}</p>
                                                            <h6 className="mb-3 price">{item.price}$</h6>
                                                            <button onClick={(e) => {
                                                                e.preventDefault();
                                                                dispatch(addToCart(item))
                                                            }
                                                            } className="btn btn-primary ms-1">
                                                                Add to cart
                                                                <i className="fas fa-shopping-cart ms-1"></i>
                                                            </button>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>


                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    {/* Pagination */}
                    <nav
                        aria-label="Page navigation example"
                        className="d-flex justify-content-center mt-3"
                    >
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* Pagination */}
                </div>
            </main>
            {/*Main layout*/}
            <footer
                className="text-center text-white mt-4"
                style={{ backgroundColor: "#607D8B" }}
            >
                {/*Call to action*/}
                <div className="pt-4 pb-2">
                    <a
                        className="btn btn-outline-white footer-cta mx-2"
                        href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                        target="_blank"
                        role="button"
                    >
                        Download MDB
                        <i className="fas fa-download ms-2" />
                    </a>
                    <a
                        className="btn btn-outline-white footer-cta mx-2"
                        href="https://mdbootstrap.com/education/bootstrap/"
                        target="_blank"
                        role="button"
                    >
                        Start free tutorial
                        <i className="fas fa-graduation-cap ms-2" />
                    </a>
                </div>
                {/*/.Call to action*/}
                <hr className="text-dark" />
                <div className="container">
                    {/* Section: Social media */}
                    <section className="mb-3">
                        {/* Facebook */}
                        <a
                            className="btn-link btn-floating btn-lg text-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        {/* Twitter */}
                        <a
                            className="btn-link btn-floating btn-lg text-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        {/* Google */}
                        <a
                            className="btn-link btn-floating btn-lg text-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a
                            className="btn-link btn-floating btn-lg text-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        {/* YouTube */}
                        <a
                            className="btn-link btn-floating btn-lg text-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-youtube" />
                        </a>
                        {/* Github */}
                        <a
                            className="btn-link btn-floating btn-lg text-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", textColor: "#E0E0E0" }}
                >
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>
        </>

    )
}

