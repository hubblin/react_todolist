import React from 'react';
import './TodoTemplate.css';



const TodoTemplate = ({children}) =>{
    return(
        <div>
            <div className="TodoContainer nav-fade">
                <div className="TodoTemplate">
                    <div className="todo-title">
                        <p className="title">일정 관리</p>
                        
                    </div>

                </div>
            </div>

            <div className="section-container">
                <div className="todo-content">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default TodoTemplate;