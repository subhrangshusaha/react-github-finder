import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
	return (
		<>
			{/* <div className='bg-purple-500'>
				<h1 className="text-xl">Hello World</h1>
				<button className="btn">Click</button>
			</div> */}

			 <div className="flex flex-col justify-between h-screen">
				<Navbar />
				<main>Content</main>
			 </div>
		</>
	);
}

export default App;
