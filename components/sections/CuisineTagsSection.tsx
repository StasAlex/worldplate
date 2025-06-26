import Image from 'next/image'
import Link from 'next/link'
import { getFlagUrlOrPlaceholder } from '@/utils/getFlagUrl'

export default function CuisineTagsSection({ areas }: { areas: string[] }) {
    return (
        <section className="px-4 md:px-10 max-w-7xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-4">Browse by Cuisine</h2>
            <div className="flex flex-wrap gap-3">
                {areas.map(area => {
                    const flagUrl = getFlagUrlOrPlaceholder(area)
                    return (
                        <Link
                            key={area}
                            href={`/cuisine/${area}`}
                            className="inline-flex items-center gap-2 bg-gray-100 text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition"
                        >
                            <Image src={flagUrl} alt={area} width={16} height={12} style={{ height: 'auto' }}/>
                            {area}
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}