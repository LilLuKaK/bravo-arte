import React from 'react';
import "./styles/Global.css";
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <ProductList />
            <Footer />
        </>
    );
}

export default App;
