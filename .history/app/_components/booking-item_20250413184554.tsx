import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


const  BookingItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5">
                <div className="flex flex-col gap-2">
                    <Badge className="bg-[#221C3D] text-primary hover:bg[#221C3d]">Confirmado</Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>

                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"/>

                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>

                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>
            </CardContent>
        </Card>

     );
}



 
export default BookingItem;