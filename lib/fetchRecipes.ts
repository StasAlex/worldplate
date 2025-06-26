import axios from 'axios'

export async function getCuisines() {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    return res.data.meals.map((item: any) => item.strArea)
}

export async function getAllRecipes() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const data = await res.json()
    return data.meals || []
}

export async function getRecipesByCuisine(cuisine: string) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)
    return res.data.meals
}

export async function getRecipeById(id: string) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    return res.data.meals?.[0]
}

export async function getCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    return data.categories
}
