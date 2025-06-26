import Image from 'next/image'
import Link from 'next/link'
import type { Category, Recipe } from '@/types'
import HeroCategoryTags from '@/components/HeroCategoryTags'
import {getCategoriesWithCounts} from "@/lib/getCategoriesWithCounts";

interface HeroSectionProps {
    featured: Recipe
    flagUrl: string
    categories: Category[]
}

export default async function HeroSection({ featured, flagUrl, categories }: HeroSectionProps) {
    const categoriesWithCounts = await getCategoriesWithCounts()

    return (
        <section className="mb-16 w-full">
            <div className="relative w-full h-[300px] md:h-[450px]">
                <Image
                    src={featured.strMealThumb}
                    alt={featured.strMeal}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    {categories?.length > 0 && <HeroCategoryTags categories={categoriesWithCounts} />}
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">{featured.strMeal}</h1>{/* Cuisine Tag */}
                    {featured.strArea && (
                        <Link href={`/cuisine/${featured.strArea}`}>
              <span className="mt-4 inline-flex items-center gap-2 bg-white/20 text-white text-sm px-3 py-1 rounded-full hover:bg-white/30 transition">
                <Image
                    src={flagUrl}
                    alt={featured.strArea}
                    width={16}
                    height={12}
                    style={{ height: 'auto', width: 'auto' }}
                />
                  {featured.strArea}
              </span>
                        </Link>
                    )}

                    {/* View Recipe */}
                    <div>
                        <Link
                            href={`/recipe/${featured.idMeal}`}
                            className="mt-3 inline-block text-sm text-white underline"
                        >
                            View Recipe
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
