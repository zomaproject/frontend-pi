import { useSelector } from "react-redux";
export default function useDiets() {
	const diets = useSelector((state) => state.typesDiets.diets);
	const diesOtpions = diets.map((diet) => diet.name);
	return diesOtpions;
}
