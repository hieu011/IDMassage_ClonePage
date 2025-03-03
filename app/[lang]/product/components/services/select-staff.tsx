import { Button } from "@/components/ui/button";

const fakeTickets = [
    { id: 1, duration: "60 phút", price: 370000, description: "Massage body" },
    { id: 2, duration: "90 phút", price: 520000, description: "Massage body" },
    { id: 3, duration: "120 phút", price: 680000, description: "Massage body" },
    { id: 4, duration: "150 phút", price: 850000, description: "Massage body VIP" },
];

const SelectStaff = ({ productDetailText }: any) => {
    return (
        <div className="mt-15">
            <p className="text-sm mt-4">
                {productDetailText?.choose_ticket_below}
                <span className="uppercase text-[var(--button-pink-color-)] font-[700]"> {productDetailText?.selected_staff_ticket} </span>
                {productDetailText?.if_choose_specific_staff}
            </p>
            <div className="shadow-[0px_1px_15px_0px_rgba(50,50,50,0.4)] rounded-2xl max-w-[85%] m-auto p-3 pb-6 text-center mt-5">
                <h3 className="uppercase text-[var(--button-pink-color-)] mb-10 text-[19px] font-[700]">{productDetailText?.selected_staff_ticket}</h3>
                <div className="leading-16">
                    {fakeTickets.map((ticket) => (
                        <p key={ticket.id} className="uppercase text-[15px]">
                            {ticket.duration} {ticket.description}:
                            <span className="text-[var(--button-pink-color-)] font-[700]"> {ticket.price.toLocaleString()}đ</span>
                        </p>
                    ))}
                </div>
                <p className="text-[9px] text-[var(--button-green-color-)] italic">
                    {productDetailText?.included_tip_travel}
                </p>
                <Button variant={'service'} className='uppercase mt-10 bg-[var(--button-pink-color-)]'>{productDetailText?.choose_staff_now}</Button>
            </div>
        </div>
    );
};

export default SelectStaff;
