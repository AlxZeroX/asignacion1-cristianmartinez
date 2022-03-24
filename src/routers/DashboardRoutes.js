import { Routes, Route } from 'react-router-dom';

import { Footer } from '../components/ui/Footer';
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { Navbar } from '../components/ui/Navbar';
// import { Nave } from '../components/ui/Nave';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>

            <Footer />

        </>
    )
}
