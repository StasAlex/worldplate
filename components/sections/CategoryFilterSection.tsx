'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Category } from '@/types'

export default function CategoryFilterSection({ categories }: { categories: Category[] }) {
    const router = useRouter()

    return (
        <section className="px-4 md:px-10 max-w-7xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat.idCategory}
                        onClick={() => router.push(`/category/${cat.strCategory}`)}
                        className="flex flex-col items-center p-3 bg-white shadow rounded hover:bg-gray-100 transition"
                    >
                        <Image
                            src={cat.strCategoryThumb}
                            alt={cat.strCategory}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <span className="mt-2 text-sm font-medium">{cat.strCategory}</span>
                    </button>
                ))}
            </div>
        </section>
    )
}