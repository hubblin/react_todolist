import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TodoListItem.css';

const TodoListItem = () => {
    return(
        <div className="TodoListItem">
            <div className="checkbox">
                <FontAwesomeIcon className="ch" icon={['far', 'square']}/>
                <div className="text">할일</div>
            </div>
            <div className="remove">
                <FontAwesomeIcon icon={['far', 'trash-alt']}/>
            </div>
        </div>
    )
}

export default TodoListItem;