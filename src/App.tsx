import React from 'react'
import Home from './features/home/Home';
import About from './features/about/About';
import Counter from './features/counter/Counter';
import { ButtonGroup, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const App = function () {
    return (
        <Router>
            <div>
                <nav>
                    <ButtonGroup aria-label="Basic example">
                        <Link to="/">
                            <Button variant="secondary">Home</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="secondary">About</Button>
                        </Link>
                        <Link to="/counter">
                            <Button variant="secondary">Counter</Button>
                        </Link>
                    </ButtonGroup>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/counter">
                        <Counter />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
