import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Header from './Header';
import Add from './Add';
import List from './List';
import View from './View';
import '../scss/style.scss';
import store from '../utils/store';
import history from '../utils/history';

class App extends Component {
    render(){
        return(
            <Router basename={'/'}>
            <ConnectedRouter
            store={store}
            history={history}>
             <Fragment>
                <Header/>
                <div>
                    <Switch>
                        <Route
                        component={List}
                        exact={true}
                        path={'/'}
                        />
                        <Route
                        component={Add}
                        exact={true}
                        path={'/Add'}
                        />
                        <Route
                        component={View}
                        exact={true}
                        path={'/View/:book_id'}
                        />
                        <Route
                        component={Add}
                        exact={true}
                        path={'/Edit/:book_id'}/>
                        </Switch>
                    </div>
                </Fragment>

            </ConnectedRouter>
           
            </Router>
        )
    }
}

export default App;