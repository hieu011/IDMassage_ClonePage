import ServiceAdvantages from "./service-advantages"
import SelectStaff from "./select-staff"
import ServiceList from "./service-list"
import ServiceNote from "./service-note"

const Services = () => {
    return (
        <div className="bg-white shadow-sm rounded-[2px] max-w-6xl m-auto py-3 px-5 mt-2">
            <ServiceList />
            <SelectStaff />
            <ServiceAdvantages />
            <ServiceNote />
        </div>
    )
}
export default Services