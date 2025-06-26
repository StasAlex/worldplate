import type { Metadata } from 'next'
import { getRecipesByCuisine } from '@/lib/fetchRecipes'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const dynamicParams = true

export async function generateMetadata(props: {
    params: Promise<{ cuisine: string }>
}): Promise<Metadata> {
    const { cuisine } = await props.params

    return {
        title: `${cuisine} Recipes`,
        description: `Discover ${cuisine} cuisine recipes`
    }
}

export default async function CuisinePage(props: {
    params: Promise<{ cuisine: string }>
}) {
    const { cuisine } = await props.params
    const recipes = await getRecipesByCuisine(cuisine)

    if (!recipes || recipes.length === 0) {
        notFound()
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">{cuisine} Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe: any) => (
                    <Link
                        key={recipe.idMeal}
                        href={`/recipe/${recipe.idMeal}`}
                        className="block bg-white shadow rounded overflow-hidden hover:shadow-md"
                    >
                        <Image
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}