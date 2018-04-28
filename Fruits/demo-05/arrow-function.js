
const func = ({ data }) => next => action => {
    console.log('=====data:', data)
    console.log('=====next:', next)
    console.log('=====action:', action)
    return next(action);
}
const o = {
    data: 123
}

function next() {
    console.log('xxxxx')
}

func(o)(next)('666666');


function thunkMiddleware({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            console.log('888888888888888888')
        }
    }
}

thunkMiddleware(o)()()
