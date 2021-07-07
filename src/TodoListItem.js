import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TodoListItem.css';
import cn from 'classnames';

const TodoListItem = ({todo,onRemove, onToggle}) => {
    const {id,text, checked} = todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=> onToggle(id)}>
                {checked ? <FontAwesomeIcon className="ch" icon={['fas', 'check-square']} />:<FontAwesomeIcon className="ch" icon={['far', 'square']}/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <FontAwesomeIcon icon={['far', 'trash-alt']} />
            </div>
        </div>
    )
}

export default TodoListItem;