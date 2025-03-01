import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Search } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
    dict: {
        "btn-trans-vi": string;
        "btn-trans-en": string;
        "btn-trans-ko": string;
        "btn-book": string;
        "input-placeholder": string;
    };
  }
export function Header({ dict }: HeaderProps) {
    return (
        <header className="w-full bg-green-900 shadow-md">
            <div className="mx-auto py-2 flex justify-around items-center">
                <div className="w-48 md:w-48 lg:w-48">
                    <AspectRatio ratio={1200 / 400} className="relative">
                        <Image
                            src="https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/logo.png?1708595382796"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </AspectRatio>
                </div>

                <div className="flex justify-between items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black shadow-md hover:bg-gray-200 transition cursor-pointer">
                                    <Image
                                        src="https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/quoc-ky-viet-nam_1.png?1708595382796"
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                    <span className="text-sm font-medium">{dict["btn-trans-vi"]}</span>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black shadow-md hover:bg-gray-200 transition cursor-pointer">
                                    <Image
                                        src="https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/la-co-vuong-quoc-anh_1.png?1708595382796"
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                    <span className="text-sm font-medium">{dict["btn-trans-en"]}</span>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black shadow-md hover:bg-gray-200 transition cursor-pointer">
                                    <Image
                                        src="https://bizweb.dktcdn.net/100/408/530/themes/865678/assets/flag_of_south_korea_1.png?1708595382796"
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                    <span className="text-sm font-medium">{dict["btn-trans-ko"]}</span>
                                </Button>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className="bg-red-700 hover:bg-yellow-700 cursor-pointer px-6 py-6 rounded-xl text-xl font-bold">
                        {dict["btn-book"]}
                    </Button>
                    <div className="relative bg-transparent rounded-full cursor-pointer">
                        <ShoppingCart className="text-white hover:text-black" size={40} />
                        <Badge className="absolute -bottom-2 left-1/2 translate-x-1 bg-yellow-700 text-white text-[14px] px-2 py-1/2 rounded-full">
                            0
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-6 pb-4 py-2">
                <div className="relative w-full max-w-7xl mx-auto">
                    <Input
                        type="text"
                        placeholder={dict["input-placeholder"]}
                        className="pl-6 py-6 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 bg-white !text-lg"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>
        </header>
    );
}
