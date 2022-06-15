import { useState, useReducer } from "react";
function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, action.name];
		default:
			return state;
	}
}

function App() {
	const [todo, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", name });
		setName("");
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
		</>
	);
}
export default App;
