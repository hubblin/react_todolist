import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './TodoInsert.css';

const TodoInsert = () => {
    return(
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요"/>
            <button type="submit">
                <FontAwesomeIcon className="plusIcon" icon={['fas', 'plus']}/>
            </button>
        </form>
    )
}

export default TodoInsert;