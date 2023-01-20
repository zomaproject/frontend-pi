import { StyleAlert } from "../styles/Alers";

export default function Alert({ error, children }) {
	return (
		<div>
			<StyleAlert>{children}</StyleAlert>
		</div>
	);
}
