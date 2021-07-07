import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab,fas, far);

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert/>
        <TodoList/>
      </TodoTemplate>
    </div>
  );
}

export default App;
