import React,{useCallback} from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css'
import {List} from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(({index , key, style}) => {
        const todo = todos[index];
        return(
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    },[onRemove, onToggle, todos])

    return (
        
        <List
            column
            className="TodoList"
            width={1}
            height={window.innerHeight - 125}
            rowCount={todos.length}
            rowHeight={56}
            rowRenderer={rowRenderer}
            containerStyle={{
                width: "100%",
                maxWidth: "1000px",
                
            }}
            list={todos}
            style={{outline : 'none', width:"100%", overflow: 'scroll', }}
        />
    )

}

export default React.memo(TodoList);