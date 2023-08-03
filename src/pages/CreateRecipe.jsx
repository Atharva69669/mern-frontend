import React, { useState } from 'react'
import '../styles/CreateRecipe.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateRecipe = () => {
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("UserId");
  const [recipe, setRecipe] = useState({
      name: "",
      Cuisine: "",
      ingredients: [],
      instructions: "",
      imageUrl: "",
      cookingTime: 0,
      userOwner: userId,
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRecipe({ ...recipe, [name]: value })
      console.log(recipe);
    }

    const handleIngredientChange = (event, index) => {
      const { value } = event.target;
      const ingredients = [...recipe.ingredients];
      ingredients[index] = value;
      setRecipe({ ...recipe, ingredients });
    };

    const addIngredient = () => {
      setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] })
      console.log(recipe)
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        await axios.post(
          "https://mernbackend-94fp.onrender.com/recipes",
          recipe
        );

        alert("Recipe Created");
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
    return (
      <>
        <div id="wrapper">
          <div className="containers">
            <header className="left header">
              <div className="title-header">
                <h2 id="title" className="text-center">Create Your Recipe</h2>
              </div>
            </header>

            <form id="survey-form" className="right" onSubmit={handleSubmit}>
              <div className="form-set">
                <label id="name-label" for="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name of your Recipe"
                  onChange={handleChange} />
              </div>

              <div className="form-set">
                <label id="email-label" for="email">Cuisine</label>
                <input
                  type="text"
                  name="Cuisine"
                  id="email"
                  className="form-control"
                  placeholder="Cuisine"
                  onChange={handleChange} />
              </div>
              <div className="form-set">
                {recipe.ingredients.map((ingredient, index) => (
                  <input
                    placeholder={index + 1}
                    key={index}
                    type="text"
                    className="form-control"
                    name="ingredients"
                    value={ingredient}
                    onChange={(event) => handleIngredientChange(event, index)}
                  />
                ))}
                <button type="button" id="submit" className="submit-button" onClick={addIngredient}>
                  Add ingredient
                </button>
              </div>
              <div className="form-set">
                <p id="textarea-label">Instructions</p>
                <textarea
                  id="comments"
                  className="input-textarea"
                  name="instructions"
                  placeholder="Instructions"
                  onChange={handleChange}>
                </textarea>
              </div>
              <div className="form-set">
                <label id="name-label" for="name">Image Url</label>
                <input
                  type="text"
                  name="imageUrl"
                  id="name"
                  className="form-control"
                  placeholder="Image url"
                  required
                  onChange={handleChange} />
              </div>
              <div className="form-set">
                <label id="number-label" for="number">Cooking Time(minutes)</label>
                <input
                  type="number"
                  name="cookingTime"
                  id="number"
                  className="form-control"
                  onChange={handleChange} />
              </div>
              <div className="form-set">
                <button type="submit" id="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>


      </>
    )
}

export default CreateRecipe;