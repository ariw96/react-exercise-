import React from "react";
import { useState } from "react";
import "./App.css";

function Todo() {
	const [todos, setTodos] = useState([
		{ name: "CSS", completed: true },
		{ name: "JavaScript", completed: true },
		{ name: "Learn React", completed: false },
		{ name: "Learn mongoDB", completed: false },
		{ name: "Learn Node JS", completed: false },

	]);
    const handleData = (item) => {
        if (item.completed) {
            item.completed = false;
            setTodos([...todos]);
        } else {
            item.completed = true;
            setTodos([...todos]);
        }
    }

	return (
		<div>
			{todos.map((item) => {
                if (item.completed) {
                    return <li className="threw-line" >{item.name}<button onClick={()=>handleData(item)}>v</button></li>;
                }
				return (
					<li>
						{item.name} <button onClick={()=>handleData(item)} >v</button>
					</li>
				);
			})}
		</div>
	);
}

export default Todo;
