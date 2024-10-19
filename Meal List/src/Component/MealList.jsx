import MealCategory from "./MealCategory";

//function to categorize the meals by the category
const categorizeMeals = (meals) => {
  return meals.reduce((categories, meal) => {
    const category = meal.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(meal);
    return categories;
  }, {});
};

const MealList = ({ meals }) => {
  const categorizedMeals = categorizeMeals(meals);

  return (
    <div>
      {/*Render the MealCategory component to show the differents categories with
      the meals*/}
      {Object.keys(categorizedMeals).map((category) => (
        <MealCategory
          key={category}
          category={category}
          meals={categorizedMeals[category]}
        />
      ))}
    </div>
  );
};

export default MealList;
