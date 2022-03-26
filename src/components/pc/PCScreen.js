import { Productlist } from "../products/Productlist"

export const PCScreen = () => {
    return (
        <div>
            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>PC</h1>
            <hr />
            <Productlist category="pc" />
        </div>
    )
}
