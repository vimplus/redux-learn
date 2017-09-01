import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibilityTodoList from '../containers/VisibilityTodoList';
import UndoRedo from '../containers/UndoRedo';

const App = () => (
    <div>
        <AddTodo/>
        <VisibilityTodoList/>
        <Footer/>
        <UndoRedo/>
    </div>
)

export default App;
