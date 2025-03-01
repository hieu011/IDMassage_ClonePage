"use client"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useTranslations } from "next-intl";
import { useState } from "react";

const ProductInfo = () => {
    const t = useTranslations('ProductDetail');
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
            <h3 className="uppercase">{t('service')}: <span className="font-[600]">{t('service_name')}</span></h3>
            <h3 className="uppercase">{t('ticket_type')}: <span className="font-[600]">{t('random_staff')}</span></h3>
            <div className="flex items-center gap-3">
                <span className="text-[var(--header-color-)] font-[600] text-xl">370.000đ</span>
                <div><span className="text-xs">{t('listed_price')}:</span><span className="font-[600] line-through ml-2">470.000đ</span></div>
            </div>
            <div className="text-[var(--button-green-color-)] text-sm">{t('save')}: <span className="font-[600]">100.000đ</span> {t('compare_market_price')}</div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-[500]">{t('free_shipping')}</p>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="!text-xs uppercase !border-[var(--header-color-)]">{t('thailand_massage')}</Button>
                    <Button variant="outline" className="!text-xs uppercase">{t('gua_sha_massage')}</Button>
                    <Button variant="outline" className="!text-xs uppercase">{t('swedish_massage')}</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-[500] uppercase">{t('service_time')}</h2>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="!text-xs !border-[var(--header-color-)]">60 {t('duration')}</Button>
                    <Button variant="outline" className="!text-xs">75 {t('duration')}</Button>
                    <Button variant="outline" className="!text-xs">90 {t('duration')}</Button>
                    <Button variant="outline" className="!text-xs">120 {t('duration')}</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-sm font-[500] uppercase">{t('quiet_space')}</h2>
                <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" className="!text-xs">{t('absolute_silence')}</Button>
                    <Button variant="outline" className="!text-xs !border-[var(--header-color-)]">{t('normal_silence')}</Button>
                    <Button variant="outline" className="!text-xs">{t('lively_space')}</Button>
                </div>
            </div>
            <div className="flex items-center">
                <button className="border p-2 rounded-l-sm cursor-pointer" onClick={handleDecrement}><Minus size={18} /></button>
                <p className="min-w-16 text-center text-lg border-t border-b py-[3px]">{count}</p>
                <button className="border p-2 rounded-r-sm cursor-pointer" onClick={handleIncrement}><Plus size={18} /></button>
            </div>
            <Button className="bg-[var(--button-red-color-)] hover:bg-transparent hover:border hover:text-black cursor-pointer duration-all-100 uppercase text-base">{t('select')}</Button>
        </div>
    )
}
export default ProductInfo