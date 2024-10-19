//Render a category with his meals
    const MealCategory = ({ category, meals }) => {
  return (
    <div className="bg-white px-5 rounded-lg shadow-lg mt-5">
      <div >
        <h2 className="text-xl font-bold text-gray-800 ">{category}</h2>
      </div>
      <ul className="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2">
        {meals.map((meal) => (
          <li key={meal.id} className="py-2">
            <div className="flex items-center space-x-4">
              <span className="text-md font-medium text-gray-700">
                {meal.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealCategory;
