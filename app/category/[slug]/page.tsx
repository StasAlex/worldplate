import type { Metadata } from 'next'
import { getAllRecipes } from '@/lib/fetchRecipes'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Recipe } from '@/types'

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await props.params
    return {
        title: `Category: ${slug}`,
        description: `All recipes in the ${slug} category.`,
    }
}

export default async function CategoryPage(props: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await props.params
    const allRecipes: Recipe[] = await getAllRecipes()
    const recipes = allRecipes.filter(r => r.strCategory === slug)

    if (recipes.length === 0) {
        notFound()
    }

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Category: {slug}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map(recipe => (
                    <Link key={recipe.idMeal} href={`/recipe/${recipe.idMeal}`} className="block">
                        <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
