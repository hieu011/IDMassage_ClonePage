import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Recruitment() {
    return (
        <div className="">
            <AspectRatio ratio={40 / 27} className="">
                <Image
                    src="https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/feature6_banner.jpg?1708595382796"
                    alt="Banner"
                    fill
                    className="h-full w-full rounded-lg object-cover"
                />

                <Button className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white text-xl font-bold cursor-pointer py-8 px-14 rounded-4xl transition-all animate-[bounce_1.5s_ease-in-out_infinite]">
                    ỨNG TUYỂN NGAY
                </Button>
            </AspectRatio>
        </div>
    );
}
