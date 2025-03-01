import { Button } from "@/components/ui/button"
import { SERVICE_INFO } from "@/constants/service-info"
import Link from "next/link"
const ServiceNote = () => {
    return (
        <div className="mt-10 p-5">
            <h2 className="text-lg font-semibold text-center uppercase text-[var(--button-green-color-)] mb-4">
                Ghi chú
            </h2>

            <div className="space-y-3">
                <p className="text-sm">
                    - Khi cho địa chỉ <span className="text-[var(--button-green-color-)] font-medium">vui lòng cho địa chỉ chính xác</span> để bắt xe grab đến, chúng tôi <span className="text-[var(--button-red-color-)] font-medium">không thể chốt lịch nếu địa chỉ không chính xác</span> để bắt xe.
                </p>

                <p className="text-sm">
                    - Địa chỉ chính xác có nghĩa là bạn cho đúng địa chỉ để nhân viên đến địa chỉ đó làm massage cho bạn, không phải là bạn phải đang ở đó hoặc đến địa điểm rồi mới cho địa chỉ.
                </p>

                <p className="text-sm">
                    - <span className="text-[var(--button-green-color-)] font-medium">Nếu</span> bạn đi du lịch và <span className="text-[var(--button-green-color-)] font-medium">bạn chưa có địa chỉ</span> nghỉ ngơi nên không biết cho như thế nào thì bạn có thể <span className="text-[var(--button-green-color-)] font-medium">vào google tìm khách sạn, nhà nghỉ.... phù hợp với bạn và copy gửi cho chúng tôi địa chỉ của khách sạn đó</span>, sau khi nhân viên báo thời gian di chuyển cho bạn thì bạn chỉ cần canh thời gian và đến trước nhân viên vài phút là được ạ.
                </p>

                <p className="text-sm">
                    Nếu bạn <span className="text-[var(--button-green-color-)] font-medium">thuộc Quốc Gia khác không phải là người Việt Nam</span> thì có thể chúng tôi không không giỏi hoặc không biết nói ngôn ngữ của bạn. Bạn có thể đặt vé bình thường nhưng nếu bạn có thắc mắc về dịch vụ cần cần được giải đáp nên gửi nội dung cho chúng tôi qua tin nhắn đến số điện thoại: <span className="text-[var(--button-green-color-)] font-medium">(0334740869) - (+84334740869)</span> để chúng tôi hỗ trợ bạn được nhanh và dễ dàng hơn.
                </p>

                <p className="text-sm">
                    Hãy tham thảo thêm thông tin về dịch vụ của chúng tôi & đừng ngại liên hệ chúng tôi khi bạn cần hỗ trợ nhé. <span className="text-[var(--button-green-color-)] font-medium">Được chăm sóc hỗ trợ bạn là niềm vinh hạnh & tự hào với chúng tôi!</span>
                </p>
            </div>
            <div className="mt-10 text-center flex flex-col items-center space-y-10">
                {SERVICE_INFO.map((item) => (
                    <Button variant="serviceInfo" key={item.id} asChild>
                        <Link href={item.url}>{item.title}</Link>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default ServiceNote 