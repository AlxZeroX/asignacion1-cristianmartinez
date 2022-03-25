import { HeroList } from '../hero/HeroList';


export const DcScreen = () => {
    return (
        <div>
        <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>DCScreen</h1>
            <hr />

            <HeroList publisher="DC Comics" />

        </div>
    )
}
