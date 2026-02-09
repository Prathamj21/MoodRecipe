function showRecipe(mood) {

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
            ]
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
            ]
        },

        stressed: {
            name: "Green Tea with Oats",
            ingredients: "Green tea leaves, Oats, Honey",
            steps: [
                "Boil water and add green tea leaves.",
                "Strain and add honey.",
                "Cook oats with water.",
                "Serve oats with green tea."
            ]
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
            ]
        },

        lazy: {
            name: "Maggi Noodles",
            ingredients: "Maggi noodles, Water, Tastemaker",
            steps: [
                "Boil water in a pan.",
                "Add noodles and tastemaker.",
                "Cook for 2 minutes.",
                "Stir well and serve."
            ]
        },

        energetic: {
            name: "Smoothie Bowl",
            ingredients: "Banana, Berries, Milk",
            steps: [
                "Add fruits to blender.",
                "Pour milk and blend.",
                "Pour into bowl.",
                "Top with nuts and seeds."
            ]
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
            ]
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
            ]
        },

        healthy: {
            name: "Salad Bowl",
            ingredients: "Cucumber, Tomato, Lettuce, Olive oil",
            steps: [
                "Wash and chop vegetables.",
                "Add vegetables to bowl.",
                "Drizzle olive oil.",
                "Mix well and serve."
            ]
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
            ]
        }
    };

    let recipe = recipes[mood];

    let stepsHTML = "<ol>";
    recipe.steps.forEach(step => {
        stepsHTML += `<li>${step}</li>`;
    });
    stepsHTML += "</ol>";

    document.getElementById("result").innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Steps to Prepare:</strong></p>
        ${stepsHTML}
    `;
}
