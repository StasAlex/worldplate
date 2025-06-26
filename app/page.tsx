// app/page.tsx
import { getAllRecipes, getCategories } from '@/lib/fetchRecipes'
import type { Recipe } from '@/types'
import { getFlagUrlOrPlaceholder } from '@/utils/getFlagUrl'

import HeroSection from '@/components/sections/HeroSection'
import CuisineTagsSection from '@/components/sections/CuisineTagsSection'
import CategoryFilterSection from '@/components/sections/CategoryFilterSection'
import PopularRecipesSection from '@/components/sections/PopularRecipesSection'

export default async function HomePage() {
    const recipes: Recipe[] = await getAllRecipes()
    const categories = await getCategories()
    const featured = recipes[Math.floor(Math.random() * recipes.length)]
    const featuredFlagUrl = getFlagUrlOrPlaceholder(featured.strArea)
    const uniqueAreas = [...new Set(recipes.map((r) => r.strArea))].filter(Boolean)

    return (
        <main className="px-0 md:px-0 pb-10">
            <HeroSection featured={featured} flagUrl={featuredFlagUrl} categories={categories} />
            <CuisineTagsSection areas={uniqueAreas} />
            <CategoryFilterSection categories={categories} />
            <PopularRecipesSection recipes={recipes} />
        </main>
    )
}
