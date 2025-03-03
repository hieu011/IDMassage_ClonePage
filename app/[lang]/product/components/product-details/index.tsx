import { Star } from "lucide-react"
import { ProductImages } from "./product-images"
import ProductInfo from "./product-info"
import Container from "@/components/layout/container"

const ProductDetails = ({ productDetailText }: any) => {
    return (
        <Container>
            <div className="bg-white rounded-[2px] shadow-md p-3">
                <div className="flex flex-wrap gap-1 items-center justify-between border-b py-1 px-3">
                    <h1 className="uppercase text-[19px] text-[#333] font-[500]">{productDetailText.service_type}</h1>
                    <div className="rating text-[#ffbe00] flex items-center gap-1">
                        <Star size={18} />
                        <Star size={18} />
                        <Star size={18} />
                        <Star size={18} />
                        <Star size={18} />
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 py-5">
                    <ProductImages />
                    <ProductInfo productDetailText={productDetailText} />
                </div>
            </div>
        </Container>
    )
}

export default ProductDetails