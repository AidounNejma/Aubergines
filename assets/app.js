import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './index';
import './styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
            <Route path='/*' element={<Index />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
); 

