import React, { useEffect, useState } from 'react';
import Card from '../Common/Card';

const SelectedMealCalculation = ({selectedMeals, mealData}) => {
    const [isChevronClicked, setIsChevronClicked] = useState(false);

    useEffect(() => {
        if (selectedMeals.length > 0) {
          setIsChevronClicked(true);
        }
    }, [selectedMeals.length]);
    

    function calculateTotalPrice(selectedMeals, mealList) {
        const totalPrice = selectedMeals.reduce((total, mealId) => {
          const selectedMeal = mealList.find((item) => item.id === mealId);
          if (selectedMeal) {
            total += selectedMeal.price;
          }
          return total;
        }, 0);
    
        return totalPrice;
      }
    
      const totalPrice = calculateTotalPrice(selectedMeals, mealData.meals);
    
      const toggleChevron = () => {
        setIsChevronClicked(!isChevronClicked);
      };
    return (
        <div className="right-div">
        <h3>Selected Meal</h3>
        <Card>
          <div className="selected-meal-div">
            <div className="flight-title" onClick={toggleChevron}>
              <div>Riga - St Petersburg</div>
              <span
                className={`accordion-icon ${
                  isChevronClicked ? "accordion-icon--rotated" : ""
                }`}
                style={selectedMeals.length <= 0 ? { display: "none" } : null}
              ></span>
            </div>
            {selectedMeals.length > 0 &&
              isChevronClicked &&
              mealData.meals.filter((obj) => selectedMeals.includes(obj.id)).map((item) => {
                return (
                  <div className="selected-meal-item" key={item.id}>
                    {item.title}
                  </div>
                );
              })}
          </div>
        </Card>
        {selectedMeals.length > 0 && isChevronClicked && (
          <div className="total-price-div">
            Total for all Passenger: $ {totalPrice.toFixed(3)}
          </div>
        )}
      </div>
    );
}

export default SelectedMealCalculation;