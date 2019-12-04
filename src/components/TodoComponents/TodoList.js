import React from "react";
import Obj from "./Todo";


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ObjList = props => {
    return (
        <div className="list">
        {props.list.map(task => (
            <Obj key={task.id} task={task} toggleTask={props.toggleTask} />
        ))}
            <button className="delete-btn" onClick={props.deleteTask}>Clear Completed</button>
        </div>
    );
};

export default ObjList; 
