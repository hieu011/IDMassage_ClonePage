import { Star } from "lucide-react"
import { ProductImages } from "./product-images"
import ProductInfo from "./product-info"
import { useTranslations } from "next-intl"

const ProductDetails = () => {
    const t = useTranslations('ProductDetail');
    return (
        <div className="max-w-6xl m-auto bg-white rounded-[2px] shadow-md p-3">
            <div className="flex flex-wrap gap-1 items-center justify-between border-b py-1 px-3">
                <h1 className="uppercase text-[19px] text-[#333] font-[500]">{t('service_type')}</h1>
                <div className="rating text-[#ffbe00] flex items-center gap-1">
                    <Star size={18} />
                    <Star size={18} />
                    <Star size={18} />
                    <Star size={18} />
                    <Star size={18} />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 py-5">
                <ProductImages/>
                <ProductInfo/>
            </div>
        </div>
    )
}

export default ProductDetails