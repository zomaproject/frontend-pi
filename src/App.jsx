import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ErorPage from "./components/ErorPage";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { dowloadData } from "./redux/actions/recipesActions";
import { loading } from "./redux/actions/loadingAction";
import Details from "./pages/Details";
import Form from "./components/Form";
import { loadDiets } from "./redux/actions/getTypeDietsAction";
import Landing from "./pages/Landing";

function App() {
	const [temaActual, setTemaActual] = useState(
		localStorage.getItem("tema") || "dark",
	);

	const dispatch = useDispatch();
	const handleTema = () => {
		if (temaActual === "dark") return setTemaActual("light");
		if (temaActual === "light") return setTemaActual("dark");
	};
	useEffect(() => {
		localStorage.setItem("tema", temaActual);
	}, [temaActual]);



	useEffect( () => {
		dispatch(loading(true));
		 dispatch(dowloadData()).then(() => dispatch(loading(false)));
	}, []);

	useEffect(() => {
		dispatch(loadDiets());
	}, []);
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme[temaActual]}>
				<GlobalStyles />
				<Routes>
					<Route
						path='/'
						element={<Layout handleTema={handleTema} temaActual={temaActual} />}
						errorElement={<ErorPage />}
					>
						<Route path="/" element={<Landing/>} />
						<Route path='/home' element={<Home />} />
						<Route path='/recipe/:id' element={<Details />} />
						<Route path='/create-recipe' element={<Form />} />
						<Route path='/*' element={<ErorPage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
