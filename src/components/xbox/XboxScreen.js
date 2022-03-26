import { Productlist } from '../products/Productlist'

export const XboxScreen = () => {
  return (
    <div>
      <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>XBOX</h1>
      <hr />
      <Productlist category="xbox" />
    </div>
  )
}
