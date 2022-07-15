import { useState } from "react";
//import { form } from "react";

export default function Info() {

    const [taskList, setTaskList] = useState([]);
	const [getList, setvalue] = useState();


	const createNewTask = (e1) => {

		setTaskList([...taskList, getList]);
		e1.target.value = "";
	};

	const handleChange = (e) => {
		setvalue(e.target.value);
	};

	console.log(taskList);
	return (
		<>

			<h2>Today's plan</h2>
			<input type="text" onChange={(e) => { handleChange(e); }} />

			<button onClick={(e) => createNewTask()}>Create New Task</button>

			{taskList.map((task) => {
				return (
					<>
						<p>{task}</p>
					</>
				);
			})}
		</>
	);
}
