import { useState, useEffect } from "react";
import MealList from "./Component/MealList";
import SearchBar from "./Component/SearchBar";
import SortButton from "./Component/SortButton";
import Loading from "./Component/Loading";
import mealsData from "./Data/mealData.json";

const App = () => {
  //UseState to manage:
  //array of meals
  const [meals, setMeals] = useState([]);
  //boolean to show loading
  const [loading, setLoading] = useState(true);
  //string to filter meals
  const [searchQuery, setSearchQuery] = useState("");
  //boolean to sort meals
  const [sorted, setSorted] = useState(false);

  //Simulation of fetching Data whit TimeOut to show loading component
  useEffect(() => {
    setTimeout(() => {
      setMeals(mealsData);
      setLoading(false);
    }, 1000);
  }, []);

  //Filter meals by searchQuery
  const filteredMeals = meals.filter((meal) =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Sort meals by name
  if (sorted) {
    filteredMeals.sort((a, b) => a.name.localeCompare(b.name));
  }
  //Loading component if is true
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Meal List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortButton sorted={sorted} setSorted={setSorted} />

      
      {filteredMeals.length === 0 ? (
        //Message if is not data
        <p>No hay Data</p>
      ) : (
        <MealList meals={filteredMeals} />
      )}
    </div>
  );
};

export default App;
