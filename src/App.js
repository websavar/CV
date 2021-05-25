import React from 'react';
import './utils';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Main from './pages/Main';
import Posts from './pages/Posts';
import NotFoundPage from "./pages/NotFoundPage";
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/Posts/:title" component={Posts} />
                <Route path="/404" component={NotFoundPage} />
                <Route path="" component={NotFoundPage} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
