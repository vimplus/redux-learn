/**
 * Redux 买水果
 */

const { createStore, combineReducers } = require('redux');

/**
 * 购买Apple Action
 * @param  num [description]
 * @return action
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
 * 购买水果 - 进口水果
 * @param  num
 * @return action
 */
function buyImportedApple(num) {
    return {
        type: 'BUY_IMPORTED_APPLE',
        payload: {
            count: num
        }
    }
}

/**
 * 购买水果 - 进口鸡蛋
 * @param  num
 * @return action
 */
function buyImportedEgg(num) {
    return {
        type: 'BUY_IMPORTED_EGG',
        payload: {
            count: num
        }
    }
}


/**
 * 购买egg Action
 * @param  num
 * @return action
 */
function buyEgg(num) {
    return {
        type: 'BUY_EGG',
        payload: {
            count: num
        }
    }
}


// 账本
// 水果账本
const fruitsState = {
    apple: 0,
    orange: 0,
    banana: 0,
    importedApple: 0
}
// 生鲜账本
const freshState = {
    egg: 0,
    fish: 0,
    vagetable: 0,
    importedEgg: 0
}


/**
 * 监听函数（水果收银员）
 * 收银员只要知道顾客的需求就能正确的操作账本
 * @param  state
 * @param  action
 * @return new state
 */
function fruitsReducer(state = fruitsState, action) {
    switch (action.type) {
        case 'BUY_APPLE':
            return Object.assign({}, state, {
                apple: state.apple + action.payload.count
            });
        case 'BUY_IMPORTED_APPLE':
            return Object.assign({}, state, {
                importedApple: state.importedApple + action.payload.count
            });
        default:
            return state;
    }
}

/**
 * 生鲜收银员
 * @param  state
 * @param  action
 * @return new state
 */
function freshReducer(state = freshState, action) {
    switch (action.type) {
        case 'BUY_EGG':
            return Object.assign({}, state, {
                egg: state.egg + action.payload.count
            });
        case 'BUY_IMPORTED_EGG':
            return Object.assign({}, state, {
                importedEgg: state.importedEgg + action.payload.count
            });
        default:
            return state;
    }
}


// 采购商品生成器 - 采购员（API）
function fetchGoodsGenerator(time, action) {
    // 用延时模拟采购时间
    const timer = setTimeout(() => {
        clearTimeout(timer);

        // 采购完成，通知销售员
        store.dispatch(action);
    }, time)
}

// 采购进口苹果2天（2s）
function fetchImportedApple(action) {
    fetchGoodsGenerator(2000, action)
}

// 采购进口鸡蛋3天（3s）
function fetchImportedEgg(action) {
    fetchGoodsGenerator(3000, action)
}

const API = {
    fetchImportedApple,
    fetchImportedEgg
}

const state = {
    fruits: fruitsReducer,
    fresh: freshReducer
}
const reducer = combineReducers(state);

// 创建店铺
const store = createStore(reducer);


// store.getState() 可以获取最新的state
store.subscribe(() => {
    console.log(store.getState())
})

// 开始买水果和生鲜
store.dispatch(buyApple(1));
API.fetchImportedApple(buyImportedApple(10))
store.dispatch(buyEgg(2));
API.fetchImportedEgg(buyImportedEgg(20))
store.dispatch(buyEgg(8));
