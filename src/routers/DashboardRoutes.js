import { Routes, Route } from 'react-router-dom';

import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';
import { Home } from '../components/ui/Home';
import { PS4Screen } from '../components/ps4/PS4Screen';
import { Search } from '../components/search/Search';
import { PCScreen } from '../components/pc/PCScreen';
import { XboxScreen } from '../components/xbox/XboxScreen';
import { ProductScreen } from '../components/products/ProductScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="">
                <Routes>
                    <Route path="inicio" element={<Home />} />
                    <Route path="ps4" element={<PS4Screen />} />
                    <Route path="pc" element={<PCScreen />} />
                    <Route path="xbox" element={<XboxScreen />} />

                    <Route path="search" element={<Search />} />
                    <Route path="game/:gameId" element={<ProductScreen />} />

                    <Route path="/" element={<Home />} />
                </Routes>
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}
