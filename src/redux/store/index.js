import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk), 

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;



//  una funcion que reciba argumentos dinamicos

//  una funcion que reciba argumentos dinamicos

function multiArgs(...args) {
    console.log(args);
}


multiArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
