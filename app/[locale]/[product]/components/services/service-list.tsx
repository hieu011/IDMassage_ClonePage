import { useTranslations } from "next-intl";
import ServiceCard from "./service-card"
const fakeTickets = [
    { id: 1, duration: "60 phút", price: 370000, description: "Massage body", highlight: false },
    { id: 2, duration: "75 phút", price: 390000, description: "Massage body", highlight: false },
    { id: 3, duration: "90 phút", price: 400000, description: "Massage body", highlight: true }, // Vé nổi bật
    { id: 4, duration: "120 phút", price: 500000, description: "Massage body", highlight: false },
];

const ServiceList = () => {
    const t = useTranslations('ProductDetail')
    return (
        <div className="border-t py-10">
            <p className="text-xs text-[#bbbbbb] italic">- {t('booking_guide')}: {t('choose_ticket')}</p>
            <h1 className="uppercase text-[19px] font-[700] text-[var(--button-green-color-)] text-center mt-4">
                {t('random_staff')}
            </h1>
            <p className="text-sm mt-4">
                {t('choose_ticket_below')}
                <span className="uppercase text-[var(--button-green-color-)] font-[700]">  {t('random_staff')} </span>
                {t('if_choose_staff')}
                <strong> {t('choose_staff')}</strong>
                {t('staff_will_be_assigned')}
                <strong>{t('randomly_assigned')}</strong>
            </p>
            {fakeTickets?.map((data) => (
                <ServiceCard key={data.id} data={data} />
            ))}
        </div>
    )
}
export default ServiceList