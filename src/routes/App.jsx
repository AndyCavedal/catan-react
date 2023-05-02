import React from 'react';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import '@styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import ImageGenerator from '../components/generator/imageGenerator/imageGenerator';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/maps' element={<ImageGenerator />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default App;