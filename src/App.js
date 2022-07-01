import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<BrowserRouter>
					{/* <div className='bg-purple-500'>
						<h1 className="text-xl">Hello World</h1>
						<button className="btn">Click</button>
					</div> */}

					<div className="flex flex-col justify-between h-screen">
					<Navbar />
					<main className="container mx-auto px-3">
						<Alert />
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/about" element={<About />}></Route>
							<Route path="/user/:login" element={<User />}></Route>
							<Route path="/notfound" element={<NotFound />}></Route>
							<Route path="/*" element={<NotFound />}></Route>
						</Routes>
					</main>
					<Footer />
					</div>
				</BrowserRouter>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
