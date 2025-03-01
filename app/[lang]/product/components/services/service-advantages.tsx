import { Check, Info } from "lucide-react"

const ServiceAdvantages = () => {
    return (
        <div className="mt-20">
            <div className="space-y-5">
                {/* Ưu điểm của "Vé nhân viên ngẫu nhiên" & "Vé chọn nhân viên" */}
                <div className="border p-5">
                    <h2 className="text-lg font-semibold text-center uppercase text-[var(--button-green-color-)] mb-4">
                        Ưu - nhược điểm của "Vé nhân viên ngẫu nhiên" & "Vé chọn nhân viên"
                    </h2>

                    <div className="space-y-4">
                        <div className="pb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Check className="text-[var(--button-green-color-)]" size={20} />
                                <h3 className="font-medium">Vé nhân viên ngẫu nhiên:</h3>
                            </div>
                            <p className="text-sm pl-7">
                                Nhân viên ngẫu nhiên đến làm cho bạn, vì thế thời gian di chuyển sẽ
                                <span className="text-[var(--button-green-color-)] font-medium"> nhanh </span>
                                hơn và giá cũng
                                <span className="text-[var(--button-green-color-)] font-medium"> rẻ </span>
                                hơn so với VÉ CHỌN NHÂN VIÊN. Tuy rẻ hơn nhưng dịch vụ và cách phục vụ massage là giống nhau nên bạn hãy yên tâm nhé.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Check className="text-[var(--button-pink-color-)]" size={20} />
                                <h3 className="font-medium">Vé chọn nhân viên:</h3>
                            </div>
                            <p className="text-sm pl-7">
                                Được chọn nhân viên bạn yêu thích, thường sẽ chậm hơn so với vé DISCOUNT. Bởi vì nhân viên bạn chọn có thể đang bận làm, trùng lịch hẹn,.... Có thể bạn sẽ phải chờ hoặc hẹn trước.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ưu - nhược điểm của các hình thức đặt vé */}
                <div className="border p-5">
                    <h2 className="text-lg font-semibold text-center uppercase text-[var(--button-green-color-)] mb-4">
                        Ưu - nhược điểm của các hình thức đặt vé
                    </h2>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Info size={18} className="text-[var(--button-green-color-)]" />
                            <p className="text-sm">Đặt online trực tuyến ở web: <span className="text-[var(--button-green-color-)] font-medium">Nhanh</span></p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Info size={18} className="text-[var(--button-green-color-)]" />
                            <p className="text-sm">Đặt bằng tin nhắn SMS: <span className="text-[var(--button-green-color-)] font-medium">Nhanh</span></p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Info size={18} className="text-[var(--button-green-color-)]" />
                            <p className="text-sm">
                                Gọi hotline: Thỉnh thoảng bị <span className="text-[var(--button-red-color-)] font-medium">chậm hơn so với 2 cách trên</span>.
                                Số hotline thường xuyên bị tình trạng máy bận do có quá nhiều cuộc gọi đến cùng lúc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAdvantages 