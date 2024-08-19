// import { useDispatch, useSelector } from "react-redux"
// import { addItem } from "./userCartSlice"

// export default function AddItem() {
//     // const count = 
//     const dispatch = useDispatch()
//     const addItems = () => {
//         dispatch(addItem(
//             {
//                 "id": 1,
//                 "userId": 1,
//                 "date": "2020-03-02T00:00:00.000Z",
//                 "products": [
//                     {
//                         "productId": 1,
//                         "quantity": 4
//                     },
//                     {
//                         "productId": 2,
//                         "quantity": 1
//                     },
//                     {
//                         "productId": 3,
//                         "quantity": 6
//                     }
//                 ],
//                 "__v": 0
//             },
//         ))

//     }

//     return (
//         <>
//             <div>{useSelector((state) => {
//                 console.log(state)
//             })}
//             </div>
//             {/* <button onClick={() => addItems()}>Add Items</button> */}
//         </>
//     )
// }