import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab,fas);

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert/>
      </TodoTemplate>
    </div>
  );
}

export default App;
