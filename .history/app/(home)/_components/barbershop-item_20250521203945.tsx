import { Card, CardContent } from "@/app/_components/ui/card";
import { BarberShop} from "@prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: BarberShop;
}

const BarbershopItem = ({ barbershop } : BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] maz-w-[167px] rounded-2xl">
            <CardContent className="p-0">
                <Image src={barbershop.imageUrl}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-[159px] w-full rounded-2xl"
                />
            </CardContent>
        </Card>
     );
};
 
export default BarbershopItem;