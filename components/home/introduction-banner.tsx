import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function IntroductionBanner({introductionBanner} : any) {
  return (
      <AspectRatio ratio={18 / 5} className="relative mt-2">
        <Image
          src={introductionBanner}
          alt="Banner"
          fill
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
  );
}
