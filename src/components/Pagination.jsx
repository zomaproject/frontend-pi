import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPage } from "../redux/actions/paginationActons";
export default function Pagination() {
	const numberPages = useSelector((state) => state.pagination.pagesTotal);

	const arrayPages = [...Array(numberPages).keys()].map((i) => i + 1);

	const pageActive = useSelector((state) => state.pagination.pageCurrent);
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

	return (
		<Button >
				{arrayPages.map((page) => (
					<button
						onClick={(e) =>  { handleClick(e) , handleScroll()}}
						value={page}
						className={pageActive === page ? "activo" : ""}
						key={page}
					>
						{page}
					</button>
				))}
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
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-weight: 900;
  }
  /* centrar el contenido del bootn */
  
`;
