import React, {useReducer,useRef, useCallback} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab,fas, far);

function createBulkTodos(){
  const array = [];
  for(let i =1; i <= 2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      cehcked : false
    })
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked : !todo.checked}: todo);
    default:
      return todos;
  }
}


function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //다음 id
  const nextid = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextid.current,
        text,
        checked: false
      }
      dispatch({type: 'INSERT', todo})
      nextid.current += 1;
    },
    []
  )

  const onRemove = useCallback(
    id => {
      dispatch({type: 'REMOVE', id})
    },
    []
  )

  const onToggle = useCallback(
    id => {
      dispatch({type: 'TOGGLE', id})
    },[]
  )

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
