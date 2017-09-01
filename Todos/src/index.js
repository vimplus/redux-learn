/**
 * @overview	TodoList
 * @author		txBoy
 * @date		2017-08-23
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);

console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
