import Image from "next/image"

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-10 right-5 space-y-3">
            <Image src="https://bizweb.dktcdn.net/100/449/178/files/sms-massage-tai-nha-b8a483f3-924a-4cca-a580-681a132a5da2.png?v=1647208843429"
                alt="Floating Buttons" width={50} height={50} />
            <Image src="https://bizweb.dktcdn.net/100/449/178/files/so-dien-thoai-massage-tai-nha.png?v=1647208890931"
                alt="Floating Buttons" width={50} height={50} />
        </div>
    )
}

export default FloatingButtons