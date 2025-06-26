import { getRecipeById } from '@/lib/fetchRecipes'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function RandomRecipePage() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await res.json()
    const recipe = data.meals?.[0]

    if (!recipe) return <p className="text-center py-10">No recipe found.</p>

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
            <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={600}
                height={400}
                className="w-full rounded-md mb-6"
            />

            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="mb-6 list-disc list-inside">
                {Array.from({ length: 20 }).map((_, i) => {
                    const ingredient = recipe[`strIngredient${i + 1}`]
                    const measure = recipe[`strMeasure${i + 1}`]
                    return (
                        ingredient &&
                        <li key={i}>{ingredient} — {measure}</li>
                    )
                })}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line mb-6">{recipe.strInstructions}</p>

            <Link href="/random" className="text-blue-600 underline">🎲 Спробувати інший випадковий рецепт</Link>
        </div>
    )
}