import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


const  BookingItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5">
                <div >
                    <Badge className="bg-[#221C3D] text-primary">Confirmado</Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>
                </div>
            </CardContent>
        </Card>

     );
}



 
export default BookingItem;