import { useDispatch, useSelector } from "react-redux"
import { deleteItem } from "./userCartSlice"

export default function DeleteItem() {
    // const count = 

    const dispatch = useDispatch()
    const emptyCart = () => {
        dispatch(deleteItem(2))

    }
    return (
        <>
            <div>{useSelector((state) => {
                console.log(state)
            })}
            </div>
            <button onClick={() => emptyCart()}>Delete Items</button>
        </>
    )
}