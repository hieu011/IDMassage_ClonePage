import ServiceAdvantages from "./service-advantages"
import SelectStaff from "./select-staff"
import ServiceList from "./service-list"
import ServiceNote from "./service-note"
import Container from "@/components/layout/container"

const Services = ({ productDetailText, locale }: any) => {
    return (
        <Container>
            <div className="bg-white shadow-sm rounded-[2px] py-3 px-5 mt-2">
                <ServiceList productDetailText={productDetailText} />
                <SelectStaff productDetailText={productDetailText} />
                {locale === 'vi' && (
                    <>
                        <ServiceAdvantages />
                        <ServiceNote />
                    </>
                )}
            </div>
        </Container>
    )
}
export default Services