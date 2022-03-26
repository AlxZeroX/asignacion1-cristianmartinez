import { Productlist } from '../products/Productlist';

export const PS4Screen = () => {
    return (
        <div>
            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>PS4</h1>
            <hr />
            <Productlist category="ps4" />
        </div>
    )
}
