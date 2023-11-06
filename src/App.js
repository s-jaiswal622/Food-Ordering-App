import React, { useEffect, useState } from "react";
import Data from "./Data";
import TagList from "./Components/TagList";
import MealList from "./Components/MealList";
import SelectedMealCalculation from "./Components/SelectedMealCalculation";
import Pagination from "./Components/Pagination";

function App() {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedTags, setSelectedTags] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getSelectedMeal = () => {
    const updatedMeal = Data.meals.filter((item) =>
      item.labels.includes(selectedTags)
    );
    return selectedTags === "all" ? Data.meals : updatedMeal;
  };


  const paginatedMeals = getSelectedMeal().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (selectedTags) {
      setSelectedMeals([]);
      setCurrentPage(1);
    }
  }, [selectedTags]);

  return (
    <div className="div-container">
      <div className="left-div">
        <TagList
          tags={Data.labels}
          selectedTags={selectedTags}
          onTagSelect={setSelectedTags}
        />
        <MealList
          meals={paginatedMeals}
          onMealSelect={setSelectedMeals}
          selectedMeals={selectedMeals}
        />
       <Pagination 
        selectedMeal={getSelectedMeal()} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
       />
      </div>
      <SelectedMealCalculation selectedMeals={selectedMeals} mealData={Data} />
    </div>
  );
}

export default App;
