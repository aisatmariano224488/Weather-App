import { useHistory } from "./useHistory";
import { useWeatherSearch } from "./useWeatherSearch";
import { useFavorites } from "./useFavorites";

export const useWeatherLogic = () => {
    
	const { clearHistory, removeHistory, writeHistory, ...history } = useHistory();
	const search = useWeatherSearch(writeHistory);
	const favoritesLogic = useFavorites();
	
    return { ...search, ...history, clearHistory, removeHistory, ...favoritesLogic };
}