import Image from 'next/image'
import Link from 'next/link'
import type { CategoryWithCount } from '@/lib/getCategoriesWithCounts'

interface HeroCategoryTagsProps {
    categories: CategoryWithCount[]
}

export default function HeroCategoryTags({ categories }: HeroCategoryTagsProps) {
    const filteredCategories = categories.filter(category => category.count > 0)
    return (
        <div className="w-full max-w-5xl mx-auto flex flex-wrap gap-2 justify-center mt-6">
            {filteredCategories.map(category => (
                <Link
                    key={category.idCategory}
                    href={`/category/${category.strCategory}`}
                    data-category={category}
                    className="flex items-center gap-2 text-white text-sm bg-white/10 hover:bg-white/20 transition px-3 py-1 rounded-full backdrop-blur-sm"
                >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <Image
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                            width={24}
                            height={24}
                            className="rounded-[50%]"
                            style={{ width: 'auto', height: '20px' }}
                        />
                    </div>

                    <span className="font-semibold">{category.strCategory}</span>

                    <span className="text-xs opacity-80">– {category.count} recipes</span>
                </Link>
            ))}
        </div>
    )
}
