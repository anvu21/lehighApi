
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/Login";
function App() {
  return (

    <Routes>
			<Route path="/login" exact element={<Login />} />

			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
  );
}

export default App;
