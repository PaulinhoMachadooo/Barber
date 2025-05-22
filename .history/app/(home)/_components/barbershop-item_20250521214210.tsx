import { Card, CardContent } from "@/app/_components/ui/card";
import { BarberShop} from "@prisma/client";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

interface BarbershopItemProps {
    barbershop: BarberShop;
}

const BarbershopItem = ({ barbershop } : BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] maz-w-[167px] rounded-2xl">
            <CardContent className="p-0">
                <div className="px-1 w-full h-[159px] relative">
                    <Image 
                        alt={barbershop.name} 
                        src={barbershop.imageUrl}
                        fill
                        className="rounded-2xl"
                    />
                </div>
                

                <div className="px-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant={"secondary"}>
                        Reservar
                    </Button>
                </div>

             
            </CardContent>
        </Card>
     );
};
 
export default BarbershopItem;