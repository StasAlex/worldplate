import Image from 'next/image'
import Link from 'next/link'
import { getFlagUrlOrPlaceholder } from '@/utils/getFlagUrl'
import type { Recipe } from '@/types'

export default function PopularRecipesSection({ recipes }: { recipes: Recipe[] }) {
    return (
        <section className="px-4 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Popular Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.slice(1, 7).map((r) => {
                    const flag = getFlagUrlOrPlaceholder(r.strArea)
                    return (
                        <Link
                            key={r.idMeal}
                            href={`/recipe/${r.idMeal}`}
                            className="relative group block rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-[1.02]"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={r.strMealThumb}
                                    alt={r.strMeal}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition duration-300"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                    <h3 className="text-white text-xl font-semibold text-center bg-black/50 px-4 py-2 rounded">
                                        {r.strMeal}
                                    </h3>
                                    {r.strArea && (
                                        <Link href={`/cuisine/${r.strArea}`}>
                      <span className="mt-2 inline-flex items-center gap-2 bg-black text-white text-xs px-2 py-0.5 rounded-full hover:bg-gray-800 transition">
                        <Image src={flag} alt={r.strArea} width={16} height={12} />
                          {r.strArea}
                      </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}