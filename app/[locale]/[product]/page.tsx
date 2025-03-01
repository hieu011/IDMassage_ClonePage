import Link from "next/link"
import ProductDetails from "./components/prduct-details"
import Services from "./components/services"
import { useTranslations } from "next-intl";

const ProductDetailPage = () => {
    const t = useTranslations('ProductDetail');
    return (
        <div className="bg-[#f5f8fd]">
            <div className="bg-[#f9f9f9] py-2 overflow-auto">
                <div className="max-w-6xl px-2 m-auto flex items-center gap-2 text-[13px]">
                    <Link href={'/'} className="hover:text-[var(--header-color-)] text-nowrap">Trang chủ</Link>
                    <span>/</span>
                    <Link href={'/'} className="hover:text-[var(--header-color-)] text-nowrap">P. 1 - Q. 2 - TP. NHA TRANG</Link>
                    <span>/</span>
                    <p className="uppercase text-[var(--header-color-)] text-nowrap">{t('service_type')}</p>
                </div>
            </div>
            <div className="py-3 px-2">
                <ProductDetails />
                <Services />
            </div>
        </div>
    )
}

export default ProductDetailPage