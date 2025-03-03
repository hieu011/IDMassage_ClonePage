import Link from "next/link"
import ProductDetails from "./components/product-details"
import Services from "./components/services"
import { getDictionary } from "../../../dictionaries/dictionaries"

const ProductDetailPage = async ({ params }: {
    params: Promise<{ lang: 'en' | 'vi' | 'ko' }>
}) => {
    const lang = (await params).lang;
    const dict = await getDictionary(lang)
    const productDetailText = dict.product_detail

    return (
        <div className="bg-[#f5f8fd]">
            <div className="bg-[#f9f9f9] py-2 overflow-auto">
                <div className="max-w-6xl px-2 m-auto flex items-center gap-2 text-[13px]">
                    <Link href={`/${lang}`} className="hover:text-[var(--header-color-)] text-nowrap">Trang chủ</Link>
                    <span>/</span>
                    <Link href={`/${lang}`} className="hover:text-[var(--header-color-)] text-nowrap">P. 1 - Q. 2 - TP. NHA TRANG</Link>
                    <span>/</span>
                    <p className="uppercase text-[var(--header-color-)] text-nowrap">{productDetailText.service_type}</p>
                </div>
            </div>

            <div className="py-3 px-2">
                <ProductDetails productDetailText={productDetailText} />
                <Services productDetailText={productDetailText} locale={lang} />
            </div>
        </div>
    )
}

export default ProductDetailPage