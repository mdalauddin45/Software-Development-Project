const loadData=(global)=>{
    const v = document.getElementById("data").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${v?v:global}`)
    .then(res=> res.json())
    .then(data=> displayData(data.meals))
    .catch(err=> console.log(err));
}
const displayData = (data) => {
  console.log(data);
  document.getElementById("total-meal").innerText = data.length;
  const mealContainer = document.getElementById("meals-container");

  data.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card shadow">
    <img src="${meal?.strMealThumb}" alt="" class="card-img-top rounded-top">
    <div class="card-body">
        <h2 class="card-title text-3xl font-weight-bold">${meal?.strMeal}</h2>
        <p class="card-text">${meal?.strInstructions?.slice(0,100)}..</p>
        <button onclick="displayMale('${meal.idMeal}')" type="button" class="btn btn-primary btn-block mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Read more</button>
    </div>
</div>
    `;

    mealContainer.appendChild(card); // Move this line inside the loop
  });
};


const displayMale= async(id)=>{
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
    const data = await response.json();
    console.log(data.meals[0]);
  } catch{
    (err)=>{
      console.log(err);
    }
  }
}

loadData("s");