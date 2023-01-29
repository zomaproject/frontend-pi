import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPage } from "../redux/actions/paginationActons";
export default function Pagination() {
	const numberPages = useSelector((state) => state.pagination.pagesTotal);

	const arrayPages = [...Array(numberPages).keys()].map((i) => i + 1);

	const pageActive = useSelector((state) => state.pagination.pageCurrent);
	const loading = useSelector(state => state.loading.loading)
	const dispatch = useDispatch();

	const handleScroll = (e) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(setPage(+e.target.value));
		localStorage.setItem("page", +e.target.value);
	};
	useEffect(() => {
		if (localStorage.getItem("page")) {
			dispatch(setPage(+localStorage.getItem("page")));
		}
	}, []);

	if(loading) return ''
	return (
		<Button >
			<button className="arrow" disabled={pageActive === 1} onClick={() => dispatch(setPage(pageActive - 1))} type="button">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="next">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
				</svg>
			</button>

			{arrayPages.map((page) => (
				<button
					onClick={(e) => { handleClick(e), handleScroll() }}
					value={page}
					className={`buttonNumber ${pageActive === page ? "activo " : ""} `}
					key={page}
				>
					{page}
				</button>
			))}
			<button className="arrow" disabled={pageActive === numberPages} onClick={() => dispatch(setPage(pageActive + 1))} type="button">

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="next">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
				</svg>
			</button>

		</Button>
	);
}

const Button = styled.div`
margin-top: 4rem;
display: flex;
gap: 2rem;
justify-content: center;
  .activo {
    background: green;
    color: white
  }
  & .buttonNumber {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-weight: 900;
		cursor: pointer;
  }
  /* centrar el contenido del bootn */
 &   svg {
	/*  */
	width: 2.5rem;
	height: 2.5rem;
 } 
 /* & svg:hover {
	color: green;
 }  */
 & .arrow {
	background: none;
	border: none;
 }
 & .arrow:hover{
	color: green;
 }
button:disabled:hover, 
 button[disabled]{
  /* border: 1px solid #999999; */
  /* background-color: #cccccc; */
  color: #666666;
	opacity: 0.8;
}
`;
