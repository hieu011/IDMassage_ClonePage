import ServiceCard from "./service-card"
const fakeTickets = [
    { id: 1, duration: "60 phút", price: 370000, description: "Massage body", highlight: false },
    { id: 2, duration: "75 phút", price: 390000, description: "Massage body", highlight: false },
    { id: 3, duration: "90 phút", price: 400000, description: "Massage body", highlight: true }, // Vé nổi bật
    { id: 4, duration: "120 phút", price: 500000, description: "Massage body", highlight: false },
];

const ServiceList = ({ productDetailText }: any) => {
    return (
        <div className="border-t py-10">
            <p className="text-xs text-[#bbbbbb] italic">- {productDetailText?.booking_guide}: {productDetailText?.choose_ticket}</p>
            <h1 className="uppercase text-[19px] font-[700] text-[var(--button-green-color-)] text-center mt-4">
                {productDetailText?.random_staff}
            </h1>
            <p className="text-sm mt-4">
                {productDetailText?.choose_ticket_below}
                <span className="uppercase text-[var(--button-green-color-)] font-[700]">  {productDetailText?.random_staff} </span>
                {productDetailText?.if_choose_staff}
                <strong> {productDetailText?.choose_staff}</strong>
                {productDetailText?.staff_will_be_assigned}
                <strong> {productDetailText?.randomly_assigned}</strong>
            </p>
            {fakeTickets?.map((data) => (
                <ServiceCard key={data.id} data={data} productDetailText={productDetailText} />
            ))}
        </div>
    )
}
export default ServiceList