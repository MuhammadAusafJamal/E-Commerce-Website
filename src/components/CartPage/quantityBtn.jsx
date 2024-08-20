

// const btnProps = {
//     dispacth:null,
//     fucntion:null,
//     id: data.id,
// }


export function IncrementBtn({dispatch , reducer , dataId}) {
    return (
        <>
            <button
                className="btn btn-primary px-3 me-2"
                onClick={() =>
                    dispatch(reducer(dataId))
                }
            >
                <i className="fas fa-plus"></i>
            </button>
        </>
    )
}

export function DecrementBtn({dispatch , reducer , dataId}) {
    return (
        <>
            <button
                className="btn btn-primary px-3 me-2"
                onClick={() =>
                    dispatch(reducer(dataId))
                }
            >
                <i className="fas fa-minus"></i>
            </button>
        </>
    )
}