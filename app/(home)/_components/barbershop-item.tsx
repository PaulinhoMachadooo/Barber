import { Card, CardContent } from "@/app/_components/ui/card";
import { BarberShop} from "@prisma/client";

interface BarbershopItemProps {
    barbershop: BarberShop;
}

const BarbershopItem = ({ barbershop } : BarbershopItemProps) => {
    return ( 
        <Card>
            <CardContent className="p-0">
                <h1>{barbershop.name}</h1>
            </CardContent>
        </Card>
     );
};
 
export default BarbershopItem;