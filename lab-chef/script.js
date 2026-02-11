
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

async function getRecipe() {
    const apiKey = document.getElementById('api-key-input').value.trim();
    const ingredients = document.getElementById('ingredients-input').value.trim();
    const recipe = document.getElementById('recipe-display');

    if (apiKey == "" || ingredients == "") {
        alert('There is missing content, please enter API Key and ingredients:');
        return;
    }

    recipe.innerHTML = "Loading a cooking recipe for you...";

    const prompt = `I have these ingredients: ${ingredients}. 
    Please provide a creative recipe name, 
    a list of instructions, and estimated cooking time. 
    Format the output in clean HTML (using <h2> and <li> tags). 
    Return only the inner HTML content. Do not include markdown code blocks, 
    and do not include <html>, <head>, or <body> tags. Start directly with an <h2> tag`;

    try{
        var response = await fetch(API_URL, {
            method:'POST',
            headers: {"Content-Type":"application/json", "X-goog-api-key": apiKey },
            body: JSON.stringify({contents:[{parts:[{text:prompt}]}]})
        });

        var data  = await response.json();
        recipe.innerHTML = data.candidates[0].content.parts[0].text;}


    catch(err) {
        console.error(err);
        recipe.innerHTML = "Error fetching recipe. Check your API key or connection. "
    }
}     