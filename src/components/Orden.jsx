import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { StyledOrden } from "../styles/Orden";

const Orden = ({ orden, setOrden }) => {
	const [check, setCheck] = useState({
		"A-Z": false,
		"Z-A": false,
		asc: false,
		des: false,
	});

	const handleCheck = (e) => {
		Object.keys(check).forEach((key) => {
			check[key] = false;
		});
		if (e.target.checked) {
			setCheck({
				...check,
				[e.target.id]: true,
			});
			setOrden(e.target.id);
		} else {
			setCheck({
				...check,
				[e.target.id]: false,
			});
			setOrden("");
		}
	};

	const [show, setShow] = useState(false);

	return (
		<StyledOrden>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<span className="icon-orden" onClick={() => setShow(!show)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="orden">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
			</svg>
				Orden <span className="order-state"> {orden} </span>
			</span>
			<div className={`${show ? "show" : "hiden"} options`}>
				<div>
					<label htmlFor="a-z">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-sort-ascending-letters"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							// stroke="#2c3e50"
							stroke="#fff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
							<path d="M19 21h-4l4 -7h-4" />
							<path d="M4 15l3 3l3 -3" />
							<path d="M7 6v12" />
						</svg>
					</label>
					<input
						type="checkbox"
						id='A-Z'
						checked={check["A-Z"]}
						onChange={handleCheck}
					/>
				</div>

				<div>
					<label htmlFor="z-a">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-sort-descending-letters"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							// stroke="#2c3e50"

							stroke="#fff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
							<path d="M19 10h-4l4 -7h-4" />
							<path d="M4 15l3 3l3 -3" />
							<path d="M7 6v12" />
						</svg>
					</label>

					<input
						type="checkbox"
						id='Z-A'
						checked={check["Z-A"]}
						onChange={handleCheck}
					/>
				</div>

				<div>
					<label htmlFor="0-9">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-sort-ascending-numbers"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							// stroke="#2c3e50"

							// stroke="#fff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M4 15l3 3l3 -3" />
							<path d="M7 6v12" />
							<path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
							<circle cx="17" cy="16" r="2" />
							<path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" />
						</svg>
					</label>

					<input
						type="checkbox"
						id='asc'
						checked={check["asc"]}
						onChange={handleCheck}
					/>
				</div>

				<div>
					<label htmlFor="9-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-sort-descending-numbers"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							// stroke="#2c3e50"
							// stroke="#fff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M4 15l3 3l3 -3" />
							<path d="M7 6v12" />
							<path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
							<circle cx="17" cy="5" r="2" />
							<path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" />
						</svg>
					</label>
					<input
						type="checkbox"
						id='des'
						checked={check["des"]}
						onChange={handleCheck}
					/>
				</div>
			</div>
		</StyledOrden>
	);
};

export default Orden;

