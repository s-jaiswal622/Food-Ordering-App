import React from "react";

function MealDetails({ meal }) {
    const {drinks = [], starter, desert} = meal;
  return (
      <div>
        <div className="meal-title">{`${meal.title} ${
          drinks.length ? " + Drinks" : null
        }`}</div>
        <div className="meal-details">
          <div>
            <span className="bold-text">Starter: </span>
            {starter}
          </div>
          <div>
            <span className="bold-text">Desert: </span>
            {desert}
          </div>
          <div>
            <span className="bold-text">Selected Drink: </span>
            {drinks[0].title}
          </div>
        </div>
      </div>
  );
}

export default MealDetails;
