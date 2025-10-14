import chickpea from '../assets/butternut-and-chickpea-curry-14.jpg'
import gsalad from '../assets/csalad.jpg'
import tomato from '../assets/pasta.jpg'


export const RECIPES = [
  {
    id: "1",
    title: "Spicy Tomato Pasta",
    diet: "veg",
    time: 30,
    rating: 4.5,
    steps: [
      "Cook pasta, then drain.",
      "Sauté garlic and onion in oil.",
      "Add chili and tomatoes, simmer 5–10 mins.",
      "Season with salt and pepper.",
      "Mix in pasta and toss well.",
      "Top with cheese or basil."
    ],
    descripton: "A simple pasta dish tossed in a rich, spicy tomato sauce — quick, bold, and satisfying.",
     ingredients: [
      "Pasta (spaghetti or penne)",
      "Olive oil",
      "Garlic, onion",
      "Crushed tomatoes or tomato sauce",
      "Chili flakes or fresh chili",
      "Salt, pepper, oregano (optional)",
      "Cheese or basil (optional)"
    ],
    chef: "Alice",
    image: tomato
  },
  {
    id: "2",
    title: "Grilled Chicken Salad",
    diet: "meat",
    time: 25,
    rating: 4.2,
    steps: [
      "Marinate chicken with oil, lemon, garlic, and spices (20–30 mins).",
      "Grill or pan-fry until cooked, then slice.",
      "Mix lettuce, tomato, cucumber, and onion in a bowl.",
      "Add chicken on top.",
      "Drizzle with dressing and serve."
    ],
    descripton: "A light, refreshing salad with juicy grilled chickenand crisp vegetables — perfect for a healthy meal.",
    ingredients: [
      "2 chicken breasts",
      "Olive oil",
      "1 tbsp lemon juice (or calamansi juice)",
      "Garlic, salt, pepper, paprika",
      "Lettuce or mixed greens",
      "Tomato, cucumber, onion",
      "Cheese (optional)",
      "Honey-lemon dressing (olive oil + lemon + honey + salt & pepper)"
    ],
    chef: "Bob",
    image: gsalad
  },
  {
    id: "3",
    title: "Chickpea Curry",
    diet: "veg",
    time: 40,
    rating: 4.8,
    steps: [
      "Sauté onion, garlic, and ginger in oil.",
      "Add curry powder and stir.",
      "Add tomatoes, cook until soft.",
      "Add chickpeas, coconut milk, and water.",
      "Simmer 10–15 mins until thick.",
      "Season and serve with rice."
    ],
    descripton: "A creamy, flavorful curry made with chickpeas and coconut milk — hearty and vegetarian-friendly.",
    ingredients: [
      "1 can chickpeas",
      "Cooking oil",
      "Onion, garlic, ginger",
      "Tomatoes (fresh or canned)",
      "Curry powder, salt, chili powder (optional)",
      "Coconut milk",
      "Water or broth",
      "Cilantro or lemon (optional)"
    ],
    chef: "Carla",
    image: chickpea
  }
];