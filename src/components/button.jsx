import { fetchCarts,loadAllCarts } from "./userCartSlice.js";
import { useDispatch } from "react-redux";

export default function Button() {
    const dispatch = useDispatch();

    const handleClick = async() => {
        const data = await fetchCarts();
        // console.log('data --',data)
        dispatch(loadAllCarts(data));

    }

    return (
        <div className="row">
            <div className="two columns">
                <button
                    onClick={() => handleClick()}
                    className="button-primary"
                >
                    Load All Carts
                </button>
            </div>
            {/* <div className="two columns">
        <button className="button-primary">Add to cart</button>
      </div> */}
        </div>
    );
}


// const MyComponent = () => {
//     const dispatch = useDispatch();
//     const carts = useSelector((state) => state.usercart.carts);

//     useEffect(() => {
//         dispatch(fetchCarts());
//     }, [dispatch]);

//     return (
//         <div>
//             {carts.map((cart) => (
//                 <div key={cart.id}>{cart.name}</div>
//             ))}
//         </div>
//     );
// };