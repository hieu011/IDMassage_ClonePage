import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function LanguageButton() {
  const buttons = [
    { label: "VIET NAM", src: "https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/cate_icon_1.png?1708595382796" },
    { label: "ENGLISH", src: "https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/cate_icon_2.png?1708595382796" },
    { label: "한국어", src: "https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/cate_icon_3.png?1708595382796" },
  ];

  return (
    <div className="flex justify-center gap-x-10 items-center mt-4 mb-4">
      {buttons.map((btn, index) => (
        <div key={index} className="flex flex-col items-center">
          <Button className="rounded-full p-0 overflow-hidden w-20 h-20 cursor-pointer">
            <AspectRatio ratio={1 / 1} className="w-full h-full">
              <Image
                src={btn.src}
                alt={btn.label}
                width={80}  
                height={80} 
                className="w-full h-full object-cover rounded-full"
              />
            </AspectRatio>
          </Button>
          <span className="mt-2 text-sm font-medium">{btn.label}</span>
        </div>
      ))}
    </div>
  );
}
