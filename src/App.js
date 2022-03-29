import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, News } from "./pages";

const App = () => {
	return (
		<Routes>
			<Route path="/news/:title" element={<News />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default App;
