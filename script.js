let favorites = JSON.parse(localStorage.getItem('moodRecipeFavorites')) || [];

const recipes = {
    happy: {
        name: "Chocolate Cake",
        ingredients: "Flour, Cocoa powder, Sugar, Eggs, Butter",
        steps: [
            "Preheat oven to 180°C.",
            "Mix flour, cocoa powder, and sugar in a bowl.",
            "Add eggs and melted butter and mix well.",
            "Pour batter into a baking tin.",
            "Bake for 30 minutes and serve."
        ],
        prepTime: "15 mins",
        cookTime: "30 mins",
        difficulty: "Easy"
    },

    sad: {
        name: "Creamy Pasta",
        ingredients: "Pasta, Cream, Garlic, Cheese",
        steps: [
            "Boil pasta in salted water.",
            "Heat pan and sauté garlic.",
            "Add cream and cheese.",
            "Mix cooked pasta with sauce.",
            "Serve hot."
        ],
        prepTime: "10 mins",
        cookTime: "15 mins",
        difficulty: "Easy"
    },

    stressed: {
        name: "Green Tea with Oats",
        ingredients: "Green tea leaves, Oats, Honey",
        steps: [
            "Boil water and add green tea leaves.",
            "Strain and add honey.",
            "Cook oats with water.",
            "Serve oats with green tea."
        ],
        prepTime: "5 mins",
        cookTime: "10 mins",
        difficulty: "Very Easy"
    },

    romantic: {
        name: "Pasta Alfredo",
        ingredients: "Pasta, Butter, Cream, Garlic",
        steps: [
            "Boil pasta until soft.",
            "Melt butter and sauté garlic.",
            "Add cream and simmer.",
            "Mix pasta with sauce.",
            "Garnish and serve."
        ],
        prepTime: "10 mins",
        cookTime: "20 mins",
        difficulty: "Easy"
    },

    lazy: {
        name: "Maggi Noodles",
        ingredients: "Maggi noodles, Water, Tastemaker",
        steps: [
            "Boil water in a pan.",
            "Add noodles and tastemaker.",
            "Cook for 2 minutes.",
            "Stir well and serve."
        ],
        prepTime: "2 mins",
        cookTime: "3 mins",
        difficulty: "Very Easy"
    },

    energetic: {
        name: "Smoothie Bowl",
        ingredients: "Banana, Berries, Milk",
        steps: [
            "Add fruits to blender.",
            "Pour milk and blend.",
            "Pour into bowl.",
            "Top with nuts and seeds."
        ],
        prepTime: "5 mins",
        cookTime: "0 mins",
        difficulty: "Very Easy"
    },

    sick: {
        name: "Vegetable Soup",
        ingredients: "Vegetables, Water, Salt, Pepper",
        steps: [
            "Chop vegetables.",
            "Boil vegetables in water.",
            "Add salt and pepper.",
            "Simmer for 10 minutes.",
            "Serve warm."
        ],
        prepTime: "10 mins",
        cookTime: "15 mins",
        difficulty: "Easy"
    },

    party: {
        name: "Veg Burger",
        ingredients: "Burger buns, Veg patty, Lettuce, Sauce",
        steps: [
            "Grill the veg patty.",
            "Toast burger buns.",
            "Place patty inside bun.",
            "Add lettuce and sauce.",
            "Serve with fries."
        ],
        prepTime: "10 mins",
        cookTime: "10 mins",
        difficulty: "Easy"
    },

    healthy: {
        name: "Salad Bowl",
        ingredients: "Cucumber, Tomato, Lettuce, Olive oil",
        steps: [
            "Wash and chop vegetables.",
            "Add vegetables to bowl.",
            "Drizzle olive oil.",
            "Mix well and serve."
        ],
        prepTime: "10 mins",
        cookTime: "0 mins",
        difficulty: "Very Easy"
    },

    angry: {
        name: "Spicy Noodles",
        ingredients: "Noodles, Chilli sauce, Garlic",
        steps: [
            "Boil noodles in water.",
            "Sauté garlic in pan.",
            "Add chilli sauce.",
            "Mix noodles with sauce.",
            "Serve hot."
        ],
        prepTime: "5 mins",
        cookTime: "8 mins",
        difficulty: "Easy"
    }
};

function showRecipe(mood) {
    let recipe = recipes[mood];
    let isFavorited = favorites.includes(recipe.name);

    let stepsHTML = "<ol>";
    recipe.steps.forEach(step => {
        stepsHTML += `<li>${step}</li>`;
    });
    stepsHTML += "</ol>";

    const favoriteButtonClass = isFavorited ? 'action-btn favorited' : 'action-btn';
    const favoriteButtonText = isFavorited ? '❤️ Saved' : '🤍 Save Recipe';

    document.getElementById("result").innerHTML = `
        <div class="recipe-header">
            <h2 class="recipe-title">${recipe.name}</h2>
        </div>
        <div class="recipe-meta">
            <div class="meta-item">⏱️ Prep: ${recipe.prepTime}</div>
            <div class="meta-item">🔥 Cook: ${recipe.cookTime}</div>
            <div class="meta-item">📊 Difficulty: ${recipe.difficulty}</div>
        </div>
        <div class="recipe-section">
            <h3>📋 Ingredients</h3>
            <p>${recipe.ingredients}</p>
        </div>
        <div class="recipe-section">
            <h3>👨‍🍳 Steps to Prepare</h3>
            ${stepsHTML}
        </div>
        <div class="recipe-actions">
            <button class="${favoriteButtonClass}" onclick="toggleFavorite('${recipe.name}')">${favoriteButtonText}</button>
            <button class="action-btn" onclick="printRecipe('${recipe.name}')">🖨️ Print</button>
            <button class="action-btn" onclick="startTimer()">⏲️ Timer</button>
        </div>
    `;
}

function toggleFavorite(recipeName) {
    const index = favorites.indexOf(recipeName);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeName);
    }
    localStorage.setItem('moodRecipeFavorites', JSON.stringify(favorites));
    // Re-render the current recipe to update button state
    for (let mood in recipes) {
        if (recipes[mood].name === recipeName) {
            showRecipe(mood);
            break;
        }
    }
    updateFavoritesList();
}

function toggleFavorites() {
    const panel = document.getElementById('favorites-panel');
    panel.classList.toggle('hidden');
    updateFavoritesList();
}

function updateFavoritesList() {
    const list = document.getElementById('favoritesList');
    if (favorites.length === 0) {
        list.innerHTML = '<p>No saved recipes yet!</p>';
        return;
    }
    
    let html = '';
    favorites.forEach(recipeName => {
        html += `<div class="favorite-item" onclick="showFavoriteRecipe('${recipeName}')">${recipeName}</div>`;
    });
    list.innerHTML = html;
}

function showFavoriteRecipe(recipeName) {
    for (let mood in recipes) {
        if (recipes[mood].name === recipeName) {
            showRecipe(mood);
            break;
        }
    }
}

function filterRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    
    if (searchTerm.length === 0) {
        resultDiv.innerHTML = '';
        return;
    }
    
    let matches = [];
    for (let mood in recipes) {
        const recipe = recipes[mood];
        if (recipe.name.toLowerCase().includes(searchTerm) || 
            recipe.ingredients.toLowerCase().includes(searchTerm)) {
            matches.push({ mood, recipe });
        }
    }
    
    if (matches.length === 0) {
        resultDiv.innerHTML = '<p>No recipes found matching your search.</p>';
        return;
    }
    
    let html = '<h3>Search Results:</h3>';
    matches.forEach(match => {
        html += `<div style="margin: 10px; padding: 10px; background: #f0f0f0; border-radius: 5px; cursor: pointer;" onclick="showRecipe('${match.mood}')"><strong>${match.recipe.name}</strong></div>`;
    });
    resultDiv.innerHTML = html;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function printRecipe(recipeName) {
    const recipe = recipes[Object.keys(recipes).find(key => recipes[key].name === recipeName)];
    
    const printContent = `
        <h1>${recipe.name}</h1>
        <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
        <p><strong>Cooking Time:</strong> ${recipe.cookTime}</p>
        <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
        <h2>Ingredients</h2>
        <p>${recipe.ingredients}</p>
        <h2>Steps</h2>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
    
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write('<html><head><title>' + recipe.name + '</title>');
    newWindow.document.write('<style>body { font-family: Arial; margin: 20px; }</style></head><body>');
    newWindow.document.write(printContent);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
}

function startTimer() {
    const minutes = prompt('Enter cooking time in minutes:', '10');
    if (minutes && !isNaN(minutes) && minutes > 0) {
        let timeLeft = parseInt(minutes) * 60;
        const timerInterval = setInterval(() => {
            timeLeft--;
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            document.title = `${mins}:${secs.toString().padStart(2, '0')} - MoodRecipe`;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('⏲️ Cooking time is up!');
                document.title = 'Mood Based Recipe Suggestion';
            }
        }, 1000);
    }
}

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
