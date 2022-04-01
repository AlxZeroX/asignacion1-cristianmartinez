import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { Ps4 } from '../components/ps4/Ps4';
import { Pc } from '../components/pc/Pc';
import { Xbox } from '../components/xbox/Xbox';
import { ProductScreen } from '../components/Contenido/ProductScreen';
import { Inicio } from '../components/ui/Inicio';
import { NoFound } from '../components/ui/NoFound';
import { SearchScreen } from '../components/search/SearchScreen';

// import { Search } from '../components/search/Search';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="inicio" element={<Inicio />} />
                <Route path="ps4" element={<Ps4 />} />
                <Route path="pc" element={<Pc />} />
                <Route path="xbox" element={<Xbox />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="item/:img" element={<ProductScreen />} />
                <Route path="LoginScreen" element={<LoginScreen />} />
                <Route path="*" element={<NoFound/>} />
            </Routes>
            
        </>
    )
}
