"use client"
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react";

const ProductInfo = async ({ params }: {
    params: Promise<{ lang: 'en' | 'vi' | 'ko' }>
}) => {
    const lang = (await params).lang;
    const dict = await getDictionary(lang)
    const productDetailText = dict.product_detail

    const [count, setCount] = useState(1);
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div className="col-span-2 flex flex-col text-[15px] gap-3">
            <h3 className="uppercase">Dịch vụ: <span className="font-[600]">Dịch vụ massage tại nhà khách sạn</span></h3>
            <h3 className="uppercase">Loại vé: <span className="font-[600]">Nhân viên ngẫu nhiên</span></h3>
            <div className="flex items-center gap-3">
                <span className="text-[var(--header-color-)] font-[600] text-xl">370.000đ</span>
                <div><span className="text-xs">Giá niêm yết:</span><span className="font-[600] line-through ml-2">470.000đ</span></div>
            </div>
            <div className="text-[var(--button-green-color-)] text-sm">Tiết kiệm: <span className="font-[600]">100.000đ</span> so với gia thị trường</div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-[500]">Freeship - giá trọn gói (đã bao gồm tip) vui lòng chỉ thanh toán đúng giá vé</p>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="border !border-[var(--header-color-)] !text-xs">THAILAND MASSAGE</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">CẠO GIÓ KẾT HỢP VỚI XOA BÓP</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">THUỶ ĐIẾN MASSAGE</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-[500] uppercase">Thời gian phục vụ</h2>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="border !border-[var(--header-color-)] !text-xs">60 phút</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">75 phút</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">90 phút</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">120 phút</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-[500] uppercase">Không gian yên tĩnh</h2>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="border border-gray-200 !text-xs">Yên lặng tuyệt đối - không làm phiền</Button>
                    <Button variant="outline" className="border !border-[var(--header-color-)] !text-xs">Yên lặng bình thường - ít trao đổi</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">Không gian sôi động</Button>
                </div>
            </div>
            <div className="flex items-center">
                <button className="border border-gray-200 p-2 rounded-l-sm cursor-pointer" onClick={handleDecrement}><Minus size={18} /></button>
                <p className="min-w-16 text-center text-lg border-t border-b border-gray-200 py-[3px]">{count}</p>
                <button className="border border-gray-200 p-2 rounded-r-sm cursor-pointer" onClick={handleIncrement}><Plus size={18} /></button>
            </div>
            <Button className="bg-[var(--button-red-color-)] hover:bg-transparent hover:border hover:text-black cursor-pointer duration-all-100 uppercase text-base">Chọn</Button>
        </div>
    )
}
export default ProductInfo