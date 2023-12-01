"use-strict";

const inventoryFetchGet = async () => {
  const id = window.location.hash.slice(1);
  console.log(id);
  if (!id) return;
  try {
    await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.data.recipe;
        console.log(result);
        document.querySelector(".recipe").innerHTML = "";

        const modal = `<figure class="recipe__fig">
            <img
              src="${result.image_url}"
              alt="Cauliflower Pizza Crust (with BBQ Chicken Pizza)"
              class="recipe__img"
            />
            <h1 class="recipe__title">
              <span>${result.title}</span>
            </h1>
          </figure>
          <div class="recipe__details">
            <div class="recipe__info">
              <span class="recipe__info-data recipe__info-data--minutes"
                >${result.cooking_time}</span
              >
              <span class="recipe__info-text">minutes</span>
              <span class="recipe__info-data recipe__info-data--people space"
                >${result.servings}</span
              >
              <span class="recipe__info-text">servings</span>
            </div>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="3">
                <span>+</span>
              </button>
              <button
                class="btn--tiny btn--update-servings space"
                data-update-to="5"
              >
                <span>-</span>
              </button>
            </div>
            <button class="nav__btn nav__btn--bookmarks">
              <span>SAVE</span>
            </button>
          </div>
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            
             <li class="recipe__ingredient">
                <div class="recipe__quantity">${
                  result.ingredients[0].quantity ?? ""
                }</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${
                    result.ingredients[0].unit ?? ""
                  } ${result.ingredients[0].description}</span>
                  
                </div>
              </li>
              <li class="recipe__ingredient">
              <div class="recipe__quantity">${
                result.ingredients[1].quantity ?? ""
              }</div>
              <div class="recipe__description">
                <span class="recipe__unit">${
                  result.ingredients[1].unit ?? ""
                } ${result.ingredients[1].description}</span>
                
              </div>
            </li>
            <li class="recipe__ingredient">
            <div class="recipe__quantity">${
              result.ingredients[2].quantity ?? ""
            }</div>
            <div class="recipe__description">
              <span class="recipe__unit">${result.ingredients[2].unit ?? ""} ${
          result.ingredients[2].description
        }</span>
              
            </div>
          </li>
          <li class="recipe__ingredient">
          <div class="recipe__quantity">${
            result.ingredients[3].quantity ?? ""
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${result.ingredients[3].unit ?? ""} ${
          result.ingredients[3].description
        }</span>
            
          </div>
        </li>

        <li class="recipe__ingredient">
          <div class="recipe__quantity">${
            result.ingredients[4].quantity ?? ""
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${result.ingredients[4].unit ?? ""} ${
          result.ingredients[4].description
        }</span>
            
          </div>
        </li>

        <li class="recipe__ingredient">
          <div class="recipe__quantity">${
            result.ingredients[5].quantity ?? ""
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${result.ingredients[5].unit ?? ""} ${
          result.ingredients[5].description
        }</span>
            
          </div>
        </li>
            
                       
            </ul>
          </div>
        </div>
        `;

        document
          .querySelector(".recipe")
          .insertAdjacentHTML("afterbegin", modal);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    alert("Something went wrong", error);
  }
};

["hashchange", "load"].forEach((ev) => {
  window.addEventListener(ev, inventoryFetchGet);
});
