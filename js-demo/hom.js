const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

async function fetchMeals() {
  const grid = document.getElementById("meal-grid");
  const status = document.getElementById("status");

  // Loading state
  status.innerHTML = '<span class="spinner" aria-hidden="true"></span> Loading meals...';

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    const data = await response.json();
    const meals = data && Array.isArray(data.meals) ? data.meals : [];

    if (meals.length === 0) {
      status.textContent = "No meals found.";
      return;
    }

    renderMeals(meals, grid);
    status.textContent = "";
  } catch (error) {
    console.error("API error:", error);
    status.textContent = "Something went wrong while fetching meals.";
  }
}

function renderMeals(meals, grid) {
  const cards = meals
    .map((meal) => {
      const id = String(meal.idMeal);
      const title = String(meal.strMeal);
      const img = String(meal.strMealThumb);
      return `
        <article class="card" id="meal-${id}" role="listitem" tabindex="0">
          <img src="${img}" alt="${title}" loading="lazy" />
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <p class="card-subtitle">Seafood • ID: ${id}</p>
          </div>
        </article>
      `;
    })
    .join("");

  grid.innerHTML = cards;
}

document.addEventListener("DOMContentLoaded", fetchMeals);


