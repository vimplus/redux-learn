import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

// 1. action
function changeText() {
    return {
        type: 'CHANGE_TEXT'
    }
}

function buttonClick() {
    return {
        type: 'BUTTON_CLICK'
    }
}

const initialState = {
    text: 'Hello'
}

// 2. Reducer (对于不同的action，对应的状态转换也不一样)
function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'Hello' ? 'Stark' : 'Hello'
            }
            break;
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button.'
            }
        default:
            return {
                text:'Hello'
            }
    }
}

// 3. 创建Store
let store = createStore(myApp)

// 4. 创建组件
class Hello extends Component {
    constructor(props) {
        super(props)
    }
    handleClick() {
        this.props.actions.changeText();
    }
    render() {
        return (
            <h1 onClick={this.handleClick.bind(this)}> {this.props.text} </h1>
        )
    }
}

class Change extends Component {
    constructor(props) {
        super(props)
    }
    handleClick() {
        this.props.actions.buttonClick();
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} >change</button>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { actions, text } = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        )
    }
}

// 5. 连接redux

// mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
// 由于我们这个应用太小，只有一个属性，所以只有text这个字段。
function mapStateToProps(state) {
    return { text: state.text }
}

function mapDispatchProps(dispatch) {
    return {
        actions: bindActionCreators({changeText:changeText, buttonClick: buttonClick}, dispatch)
    }
}


App = connect(mapStateToProps, mapDispatchProps)(App);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
