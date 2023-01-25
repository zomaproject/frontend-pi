import { StyleAlert } from "../styles/Alers";

export default function Alert({ error, children }) {
	return (
		<StyleAlert  className={error ? 'error' : 'success'}>
			{children}
		</StyleAlert>
	);
}
