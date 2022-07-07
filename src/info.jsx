import { useState } from "react";
import { form } from "react";

export default function Info() {
	let initialTaskList = [
		{ title: "Wordpress Work", details: " Set an installler" },
		{ title: "PHP Work", details: "Complete Auth Work" }
	];

	const [taskList, setTaskList] = useState([]);
	const [getList, setvalue] = useState(initialTaskList);


	const createNewTask = () => {
		//taskList.push({ title: "React Work", details: "Practice on sates" })
		setTaskList([
			...taskList, getList

		]);
		//resetForm();
	};

	const handleChange = (e) => {
		//console.log("hello");
		setvalue(e.target.value);
		//console.log(e.target.value);
	};

	console.log(taskList);
	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					handleChange(e);
				}}
			/>
			<input type="text" name="uname" onChange={handleChange} />
			<button onClick={createNewTask}>Create New Task</button>
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


