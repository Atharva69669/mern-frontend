import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/AllRecipes.css';

const AllRecipes = () => {
    const [recipes, setAllRecipe] = useState([]);
    const [savedRecipes,setsavedRecipes]=useState([]);
    const userID=window.localStorage.getItem("UserId");
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get("https://mernbackend-94fp.onrender.com/recipes");
                setAllRecipe(response.data);
                console.log(recipes)
            } catch (error) {
                console.log(error);
            }
        };
        const fetchSavedRecipe=async()=>{
            try{
               const response=await axios.get(`https://mernbackend-94fp.onrender.com/recipes/savedRecipes/ids/${userID}`)
              setsavedRecipes(response.data.savedRecipes);
            console.log(response.data);
            }
            catch(error){
               console.log(error)
            }
     
         }
         fetchRecipe();
         fetchSavedRecipe();
    }, [userID,recipes]);
 
    const saveRecipe=async(recipeID)=>{
        try{
           const response=await axios.put("https://mernbackend-94fp.onrender.com/recipes",{recipeID,userID})
           setsavedRecipes(response.data.savedRecipes);
           console.log(savedRecipes);
        }
        catch(error){
           console.log(error);
        }
 
     }

     const isSavedRecipe=(id)=> savedRecipes.includes(id);

    return (
        <div className='flex-box'>
            {recipes.map((res) => (
                <div className="cardi" key={res._id}>
                    <div className="header">
                        <img src={res.imageUrl} alt="food" />
                    </div>
                    <div className="text">
                        <h1 className="food">
                            {res.name}
                        </h1>
                        <i className="fa fa-clock-o">{res.cookingTime}(minutes)</i>
                        <i className="fa fa-users">{res.Cuisine}</i>
                        <ul className="info">
                            <h3>Ingredients:</h3>
                            {res.ingredients.map((ingredient, index) => (
                                <li key={index}>{index+1}.{ingredient}</li>
                            ))}
                        </ul>
                        <br />
                        <p className="info">{res.instructions}</p>
                        <button className='save' onClick={()=>{saveRecipe(res._id)}} disabled={isSavedRecipe(res._id)}>{isSavedRecipe(res._id)?"Saved":"Save"}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllRecipes;
