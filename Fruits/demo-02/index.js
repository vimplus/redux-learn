/**
 * Redux 买水果
 */

const { createStore, combineReducers } = require('redux');

/**
 * 购买Apple Action
 * @param  num [description]
 */
function buyApple(num) {
    return {
        type: 'BUY_APPLE',
        payload: {
            count: num
        }
    }
}

/**
 * 购买egg Action
 * @param  num [description]
 */
function buyEgg(num) {
    return {
        type: 'BUY_EGG',
        payload: {
            count: num
        }
    }
}

// 账本结构
const fruitsState = {
    apple: 0
}
const freshState = {
    egg: 0
}

/**
 * 监听函数（水果收银员）
 * 收银员只要知道顾客的需求就能正确的操作账本
 * @param  state
 * @param  action
 * @return new state
 */
function fruitsReducer(state = fruitsState, action) {
    if (action.type === 'BUY_APPLE') {
        return Object.assign({}, state, {
            apple: state.apple + action.payload.count
        });
    }
    return state;
}

/**
 * 生鲜收银员
 * @param  state
 * @param  action
 * @return new state
 */
function freshReducer(state = freshState, action) {
    if (action.type === 'BUY_EGG') {
        return Object.assign({}, state, {
            egg: state.egg + action.payload.count
        })
    }
    return state;
}

const state = {
    fruits: fruitsReducer,
    fresh: freshReducer
}
const reducer = combineReducers(state);
console.log('reducer:', reducer)
// 创建店铺
const store = createStore(reducer);


// store.getState() 可以获取最新的state
store.subscribe(() => {
    console.log(store.getState())
})

// 开始买水果和生鲜
store.dispatch(buyApple(1));
store.dispatch(buyEgg(2));
store.dispatch(buyApple(5));
store.dispatch(buyEgg(8));
