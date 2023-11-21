// const loadData=()=>{
//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
//     .then(res=> res.json())
//     .then(data=> console.log(data.meals))
// }


const loadData = () => {
    var v = document.getElementById("data").value;
    document.getElementById("data").value = " ";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${v}`)
      .then((res) => res.json())
      .then((data) => {
        const mealListDiv = document.createElement("div");
        mealListDiv.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4"); // Bootstrap classes for card layout
  
        if (data.meals) {
          data.meals.forEach((meal) => {
            const mealCard = document.createElement("div");
            mealCard.classList.add("col"); // Bootstrap class for column in a grid
  
            // Create Bootstrap card structure for each meal item
            mealCard.innerHTML = `
              <div class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,100)}...</p>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${meal.idMeal}">See More</button>
                </div>
              </div>
              <div class="modal fade" id="modal-${meal.idMeal}" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">${meal.strMeal}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                      <p>${meal.strInstructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            `;
  
            mealListDiv.appendChild(mealCard);
          });
        } else {
          const noDataMsg = document.createElement("div");
          noDataMsg.classList.add("col-12");
          noDataMsg.innerHTML = '<p class="text-center">No meals found.</p>';
          mealListDiv.appendChild(noDataMsg);
        }
  
        // Display the fetched meal data in the HTML
        const section = document.querySelector(".section");
        section.appendChild(mealListDiv);
  
        // Activate Bootstrap modal
        const myModal = new bootstrap.Modal(document.getElementById(`modal-${meal.idMeal}`));
        mealListDiv.addEventListener('click', (event) => {
          if (event.target.dataset.bsToggle === 'modal') {
            const targetModal = document.getElementById(event.target.dataset.bsTarget.slice(1));
            myModal.show(targetModal);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  