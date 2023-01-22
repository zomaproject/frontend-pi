import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDiets } from "../redux/actions/getTypeDietsAction";
export default function useDiets() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadDiets());
  // }, []);
	const diets = useSelector((state) => state.typesDiets.diets);
	const diesOtpions = diets.map((diet) => ({
		label: diet.name,
		value: diet.name,
		id: diet.id,
	}));
	return diesOtpions;
}
