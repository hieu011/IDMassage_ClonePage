import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function PriceRandomEmployee({priceRandomEmployee} : any) {
    return (
        <AspectRatio ratio={875 / 1313} className="">
            <Image
                src={priceRandomEmployee.bannerUrl}
                alt="Banner"
                fill
                className="h-full w-full rounded-lg object-cover"
            />

            <Button className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white cursor-pointer text-xl font-bold py-8 px-14 rounded-4xl transition-all animate-[bounce_1.5s_ease-in-out_infinite]">
                {priceRandomEmployee.bannerButton}
            </Button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg md:text-base text-center px-4">
                {priceRandomEmployee.bannerText}
            </span>
        </AspectRatio>
    );
}
