import React, {useState,useRef, useCallback} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab,fas, far);

function App() {
  const [todos, setTodos] = useState([
    {id:1, text:'리액트 기초 알아보기', checked:true},
    {id:2, text: '컴포넌트 스타일링해 보기', checked: true},
    {id:3, text: '일정 관리 앱 만들어 보기', checked: false}
  ])

  //다음 id
  const nextid = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextid.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo));
      nextid.current += 1;
    },
    [todos]
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked}: todo)
      )
    },[todos]
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
