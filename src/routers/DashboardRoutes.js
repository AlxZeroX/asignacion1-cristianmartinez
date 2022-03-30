import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { Home } from '../components/ui/Home';
import { PS4Screen } from '../components/ps4/PS4Screen';
import { Search } from '../components/search/Search';
import { PCScreen } from '../components/pc/PCScreen';
import { XboxScreen } from '../components/xbox/XboxScreen';
import { ProductScreen } from '../components/products/ProductScreen';
import { LoginScreen } from '../components/login/LoginScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="inicio" element={<Home />} />
                <Route path="ps4" element={<PS4Screen />} />
                <Route path="pc" element={<PCScreen />} />
                <Route path="xbox" element={<XboxScreen />} />
                <Route path="search" element={<Search />} />
                <Route path="ProductScreen/:img" element={<ProductScreen />} />
                <Route path="LoginScreen" element={<LoginScreen />} />
            </Routes>
            
        </>
    )
}
