import type { Metadata } from 'next'
import { getRecipeById } from '@/lib/fetchRecipes'
import Image from 'next/image'
import { notFound } from "next/navigation"

export async function generateMetadata(props: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const params = await props.params
    const recipe = await getRecipeById(params.id)

    if (!recipe) {
        return {
            title: 'Recipe not found'
        }
    }

    return {
        title: recipe.strMeal,
        description: `Details for ${recipe.strMeal}`,
    }
}

export default async function RecipePage(props: {
    params: Promise<{ id: string }>
}) {
    const params = await props.params
    const recipe = await getRecipeById(params.id)
    if (!recipe) notFound()

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
            <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={600}
                height={400}
                className="w-full rounded-md mb-6"
                priority
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
            <p className="text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>
        </div>
    )
}