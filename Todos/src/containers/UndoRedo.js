import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

var UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>Undo</button>
        <button onClick={onRedo} disabled={!canRedo}>Redo</button>
    </p>
)

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.lendth > 0,
    canRedo: state.todos.future.lendth > 0
})

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)

export default UndoRedo;
