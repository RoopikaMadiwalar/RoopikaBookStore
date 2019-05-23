import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Display from './NewApp/Display';
import AddFields from './Notes/AddFields';
import GitApp from './GitRep/gitApp';
import NewProj from './NewProj/Index'
import { Provider } from 'react-redux';
import BookStoreApp from './BookStoreApp/Components/App';
import RoopikaBookStoreApp from './Roopika_BookStoreApp/Components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// import reducer from './Redux_Videos/store/reducer';
// import ReduxVideos from './Redux_Videos/reduxLearning';
// import reducer from './Redux_Videos/store/reducerReduxBasicsLearning';
// import ReduxVideos from './Redux_Videos/reduxBasicsLearning';
// import reducer from "./Redux_Videos/multipleReducers/store/reducer";
import reducerA from "./Redux_Videos/multipleReducers/store/reducerA";
import reducerB from "./Redux_Videos/multipleReducers/store/reducerB";
import MultipleReducer from "./Redux_Videos/multipleReducers/multipleReducers";
// import store from './BookStoreApp/utils/store';
import store from './Roopika_BookStoreApp/utils/store';

const rootReducer = combineReducers({
    rA:reducerA,
    rB:reducerB
})


 
// const store = createStore(reducer, applyMiddleware(thunk));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Display/>, document.getElementById('root'));
// ReactDOM.render(<AddFields/>,document.getElementById('root'));
// ReactDOM.render(<GitApp/>,document.getElementById('root'));
//  ReactDOM.render(<NewProj/>,document.getElementById('root'));
// ReactDOM.render(<Provider store= {store}><ReduxVideos/></Provider>, document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><ReduxVideos/></Provider>,document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><MultipleReducer/></Provider>,document.getElementById('root'));
// ReactDOM.render(
//     <Provider
//     store = {store}>
// <BookStoreApp/>
// </Provider>,
// document.getElementById('root')
// );
ReactDOM.render(
<Provider store={store}>
    <RoopikaBookStoreApp/>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

