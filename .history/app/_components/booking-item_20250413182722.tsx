import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


const  BookingItem = () => {
    return ( 
        <Card>
            <CardContent>
                <div className="p-5">
                    <Badge className="bg-[#221C3D]">Confirmado</Badge>
                </div>
            </CardContent>
        </Card>

     );
}



 
export default BookingItem;