import { HeroList } from '../hero/HeroList'


export const MarvelScreen = () => {
    return (
        <div>
            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>MarvelScreen</h1>
            <hr />

            <HeroList publisher= 'Marvel Comics'/>
            <HeroList publisher= "DC Comics" />


        </div>
    )
}
