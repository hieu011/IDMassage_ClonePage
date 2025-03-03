import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function IntroductionBanner() {
  return (
      <AspectRatio ratio={18 / 5} className="relative mt-2">
        <Image
          src="https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/header_banner.jpg?1708595382796"
          alt="Banner"
          fill
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
  );
}
