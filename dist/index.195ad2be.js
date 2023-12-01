const i=async()=>{let i=window.location.hash.slice(1);if(console.log(i),i)try{await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${i}`).then(i=>i.json()).then(i=>{let e=i.data.recipe;console.log(e),document.querySelector(".recipe").innerHTML="";let n=`
        <figure class="recipe__fig">
            <img
              src="${e.image_url}"
              alt="Cauliflower Pizza Crust (with BBQ Chicken Pizza)"
              class="recipe__img"
            />
            <h1 class="recipe__title">
              <span>${e.title}</span>
            </h1>
          </figure>
          <div class="recipe__details">
            <div class="recipe__info">
              <span class="recipe__info-data recipe__info-data--minutes"
                >${e.cooking_time}</span
              >
              <span class="recipe__info-text">minutes</span>
              <span class="recipe__info-data recipe__info-data--people space"
                >${e.servings}</span
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
                <div class="recipe__quantity">${e.ingredients[0].quantity??""}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${e.ingredients[0].unit??""} ${e.ingredients[0].description}</span>
                  
                </div>
              </li>
              <li class="recipe__ingredient">
              <div class="recipe__quantity">${e.ingredients[1].quantity??""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.ingredients[1].unit??""} ${e.ingredients[1].description}</span>
                
              </div>
            </li>
            <li class="recipe__ingredient">
            <div class="recipe__quantity">${e.ingredients[2].quantity??""}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.ingredients[2].unit??""} ${e.ingredients[2].description}</span>
              
            </div>
          </li>
          <li class="recipe__ingredient">
          <div class="recipe__quantity">${e.ingredients[3].quantity??""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.ingredients[3].unit??""} ${e.ingredients[3].description}</span>
            
          </div>
        </li>

        <li class="recipe__ingredient">
          <div class="recipe__quantity">${e.ingredients[4].quantity??""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.ingredients[4].unit??""} ${e.ingredients[4].description}</span>
            
          </div>
        </li>

        <li class="recipe__ingredient">
          <div class="recipe__quantity">${e.ingredients[5].quantity??""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.ingredients[5].unit??""} ${e.ingredients[5].description}</span>
            
          </div>
        </li>
            
                       
            </ul>
          </div>
        </div>
        `;document.querySelector(".recipe").insertAdjacentHTML("afterbegin",n)}).catch(i=>console.error(i))}catch(i){alert("Something went wrong",i)}};["hashchange","load"].forEach(e=>{window.addEventListener(e,i)});//# sourceMappingURL=index.195ad2be.js.map

//# sourceMappingURL=index.195ad2be.js.map
