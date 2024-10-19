
const MealCategory = ({ category, meals }) => {
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealCategory;
