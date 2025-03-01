import ServiceCard from "./service-card"
const fakeTickets = [
    { id: 1, duration: "60 phút", price: 370000, description: "Massage body", highlight: false },
    { id: 2, duration: "75 phút", price: 390000, description: "Massage body", highlight: false },
    { id: 3, duration: "90 phút", price: 400000, description: "Massage body", highlight: true }, // Vé nổi bật
    { id: 4, duration: "120 phút", price: 500000, description: "Massage body", highlight: false },
];

const ServiceList = () => {
    return (
        <div className="border-t py-10">
            <p className="text-xs text-[#bbbbbb] italic">- Hướng dẫn đặt massage: Chọn loại vé phù hợp, ghi thêm địa chỉ của bạn & gửi</p>
            <h1 className="uppercase text-[19px] font-[700] text-[var(--button-green-color-)] text-center mt-4">
                Nhân viên ngẫu nhiên
            </h1>
            <p className="text-sm mt-4">
                Hãy chọn vé
                <span className="uppercase text-[var(--button-green-color-)] font-[700]"> nhân viên ngẫu nhiên </span>
                dưới đây nếu bạn
                <strong> chọn nhân viên</strong>
                , nhân viên đến làm cho bạn được
                <strong> điều phối theo ngẫu nhiên</strong>
            </p>
            {fakeTickets?.map((data) => (
                <ServiceCard key={data.id} data={data} />
            ))}
        </div>
    )
}
export default ServiceList