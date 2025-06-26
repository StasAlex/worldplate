import { getAllRecipes, getCategories } from '@/lib/fetchRecipes'
import type { Category, Recipe } from '@/types'

export interface CategoryWithCount extends Category {
    count: number
}

export async function getCategoriesWithCounts(): Promise<CategoryWithCount[]> {
    const [recipes, categories] = await Promise.all([
        getAllRecipes(),
        getCategories(),
    ])

    const counts: Record<string, number> = {}

    for (const recipe of recipes) {
        const categoryName = recipe.strCategory
        if (categoryName) {
            counts[categoryName] = (counts[categoryName] || 0) + 1
        }
    }

    return categories.map((category: Category): CategoryWithCount => ({
        ...category,
        count: counts[category.strCategory] || 0,
    }))
}
