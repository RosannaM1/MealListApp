import { useState, useEffect,useRef } from "react";
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
  //useRef to Focus the input at the render of the project
  const inputRef = useRef(null);

  // Simulation of fetchingData
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMeals(mealsData);
      setLoading(false);
    };

    fetchData();
  }, []);

//Focus the input at the render of the project when the loading is false
  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);


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
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        <span className="underline underline-offset-3 decoration-blue-500 dark:decoration-blue-400">
          Meal List
        </span>
      </h1>

      <div className="flex items-center justify-between w-full space-x-4">
        <div className="w-3/4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            ref={inputRef}
          />
        </div>

        <div className="w-1/4 flex justify-end">
          <SortButton sorted={sorted} setSorted={setSorted} />
        </div>
      </div>
      {filteredMeals.length > 0 ? (
        <MealList meals={filteredMeals} />
      ) : (
        <p className="mt-4 text-lg text-center text-gray-500 font-medium">
          No meals found.
        </p>
      )}
    </div>
  );
};

export default App;
