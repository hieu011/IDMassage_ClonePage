import { Button } from "@/components/ui/button";

const ServiceCard = ({ data }: { data: { duration: string; price: number; description: string; highlight: boolean } }) => {
    const priceColor = data.highlight ?
        "text-[var(--button-red-color-)] font-[500]"
        : "text-[var(--button-green-color-)]"
    return (
        <div className="shadow-[0px_1px_15px_0px_rgba(50,50,50,0.4)] rounded-2xl max-w-[85%] m-auto p-2 pb-6 text-center leading-10 mt-10">
            <h3 className="uppercase text-[#cecece]">nhân viên ngẫu nhiên</h3>
            <div>
                <p className={`uppercase text-[15px] ${priceColor}`}>
                    {data.highlight && '🔥'} {data.duration} {data.description}: <span className="font-[700]">{Math.round(data.price / 1000)}K</span>
                </p>
                <p className="text-[9px] text-[var(--button-green-color-)] italic">
                    Đã gồm tip + phí di chuyển (vui lòng chỉ thanh toán đúng giá vé)
                </p>
                {data.highlight
                    ? <Button variant={'service'} className='mt-3 bg-[var(--button-red-color-)]'>🔥Đặt ngay🔥</Button>
                    : <Button variant={'service'} className='mt-3'>Đặt ngay</Button>
                }
            </div>
        </div>
    );
};

export default ServiceCard;
