/**
 * Redux 买水果
 */

const { createStore } = require('redux')

// 买苹果
const action = {
    type: 'BUY_APPLE',
    payload: 2
}

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

// 账本结构
const state = {
    apple: 0
}

/**
 * 监听函数（收银员）
 * 收银员只要知道顾客的需求就能正确的操作账本
 * @param  state
 * @param  action
 * @return new state
 */
function reducer(state, action) {
    if (action.type === 'BUY_APPLE') {
        return Object.assign({}, state, {
            apple: state.apple + action.payload.count
        });
    }
    return state;
}

// 创建店铺
const store = createStore(reducer, state);


// store.getState() 可以获取最新的state
store.subscribe(() => {
    console.log(store.getState())
})

// 开始买水果
store.dispatch(buyApple(3));
store.dispatch(buyApple(6));
