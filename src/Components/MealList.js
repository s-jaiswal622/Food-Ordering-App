import React from "react";
import Card from "../Common/Card";
import MealDetails from "./MealDetails";
import Button from "../Common/Button";

function MealList({ meals = [], onMealSelect, selectedMeals }) {

  const handleMealSelect = (mealId) => {
    onMealSelect((prevSelectedMeals) => {
      return [...prevSelectedMeals, mealId];
    });
  };

  const handleMealDeselect = (mealId) => {
    onMealSelect((prevSelectedMeals) =>
      prevSelectedMeals.filter((item) => item !== mealId)
    );
  };

  return (
    <div className="meal-list-card-container">
      {meals.length
        ? meals.map((meal) => (
            <Card key={meal.id}>
              <div className="meal-list">
                <div>
                  <img src={meal.img} alt={meal.title} className="meal-image" />
                </div>
                <div className="meal-list-right-container">
                  <MealDetails meal={meal} />
                  <div className="meal-actions">
                    <div className="image-container">
                      {meal.drinks.map((item) => (
                        <div key={item.id} className={`drink-div ${item.title}`}>
                        {/* image is not given in the data for drinks*/}
                          {item.title} 
                        </div>
                      ))}
                    </div>
                    <div className="price-and-button">
                      <div className="meal-price">${meal.price}</div>
                      {selectedMeals.includes(meal.id) ? (
                        <Button
                          title="Deselect"
                          onClick={() => handleMealDeselect(meal.id)}
                        />
                      ) : (
                        <Button
                          title=" Select"
                          onClick={() => handleMealSelect(meal.id)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        : null}
    </div>
  );
}

export default MealList;
