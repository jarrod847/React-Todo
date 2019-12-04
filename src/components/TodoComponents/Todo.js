import React from "react";


const Obj = props => {
    return (
        <div style={props.task.completed ? { textDecoration: 'line-through' } : null} onClick={() => props.toggleTask(props.task.id)}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Obj