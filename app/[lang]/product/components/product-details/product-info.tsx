"use client"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react";

const ProductInfo = ({ productDetailText }: any) => {
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
            <h3 className="uppercase">{productDetailText.service}: <span className="font-[600]">{productDetailText.service_name}</span></h3>
            <h3 className="uppercase">{productDetailText.ticket_type}: <span className="font-[600]">{productDetailText.random_staff}</span></h3>
            <div className="flex items-center gap-3">
                <span className="text-[var(--header-color-)] font-[600] text-xl">370.000đ</span>
                <div><span className="text-xs">{productDetailText.listed_price}:</span><span className="font-[600] line-through ml-2">470.000đ</span></div>
            </div>
            <div className="text-[var(--button-green-color-)] text-sm">{productDetailText.save}: <span className="font-[600]">100.000đ</span> {productDetailText.compare_market_price}</div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-[500]">{productDetailText.free_shipping}</p>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="border border-[var(--header-color-)] !text-xs uppercase">{productDetailText.thailand_massage}</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs uppercase">{productDetailText.gua_sha_massage}</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs uppercase">{productDetailText.swedish_massage}</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-[500] uppercase">{productDetailText.service_time}</h2>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="border border-[var(--header-color-)] !text-xs">60 {productDetailText.duration}</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">75 {productDetailText.duration}</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">90 {productDetailText.duration}</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">120 {productDetailText.duration}</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-[500] uppercase">{productDetailText.quiet_space}</h2>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="border border-gray-200 !text-xs">{productDetailText.absolute_silence}</Button>
                    <Button variant="outline" className="border border-[var(--header-color-)] !text-xs">{productDetailText.normal_silence}</Button>
                    <Button variant="outline" className="border border-gray-200 !text-xs">{productDetailText.lively_space}</Button>
                </div>
            </div>
            <div className="flex items-center">
                <button className="border border-gray-200 p-2 rounded-l-sm cursor-pointer" onClick={handleDecrement}><Minus size={18} /></button>
                <p className="min-w-16 text-center text-lg border-t border-b border-gray-200 py-[3px]">{count}</p>
                <button className="border border-gray-200 p-2 rounded-r-sm cursor-pointer" onClick={handleIncrement}><Plus size={18} /></button>
            </div>
            <Button className="bg-[var(--button-red-color-)] hover:bg-transparent hover:border text-white hover:text-black cursor-pointer duration-all-100 uppercase text-base">{productDetailText.select}</Button>
        </div>
    )
}
export default ProductInfo