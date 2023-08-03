import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/SavedRecipes.css';


const SavedRecipes = () => {
    const [recipes, setRecipe] = useState([]);
    const [loggedRecipes,setloggedRecipes]=useState([]);

    const userID=window.localStorage.getItem("UserId")
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get("https://mernbackend-94fp.onrender.com/recipes");
                setRecipe(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        };


        const fetchSavedRecipe=async()=>{
            try{
               const response=await axios.get(`https://mernbackend-94fp.onrender.com/recipes/savedRecipes/ids/${userID}`)
              setloggedRecipes(response.data.savedRecipes);
            console.log(response.data);
            }
            catch(error){
               console.log(error)
            }
     
         }
        fetchRecipe();
        fetchSavedRecipe();
    }, [userID]);
 
    const saveRecipe=async(recipeID)=>{
        try{
           const response=await axios.put("https://mernbackend-94fp.onrender.com/recipes",{recipeID,userID})
          setloggedRecipes(response.data.savedRecipes)
        console.log(response);
        }
        catch(error){
           console.log(error);
        }
 
     }

     const isSaved=(id)=> loggedRecipes.includes(id);
    return (
        <div className='flex-box'>
            { recipes.map((recipe) => (
                isSaved(recipe._id) &&
                <div className="cardi" key={recipe._id}>
                    <div className="header">
                        <img src={recipe.imageUrl} alt="food" />
                    </div>
                    <div className="text">
                        <h1 className="food">
                            {recipe.name}
                        </h1>
                        <i className="fa fa-clock-o">{recipe.cookingTime} minutes</i>
                        <i className="fa fa-users">{recipe.Cuisine}</i>
                        <ul className="info">
                            <h3>Ingredients:</h3>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{index+1}.{ingredient}</li>
                            ))}
                        </ul>
                        <br />
                        <p className="info">{recipe.instructions}</p>
                        <button  className="save" onClick={()=>{saveRecipe(recipe._id)}} disabled={isSaved(recipe._id)}>{isSaved(recipe._id)?"Saved":"Save"}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SavedRecipes;
