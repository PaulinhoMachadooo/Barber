import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


const  BookingItem = () => {
    return ( 
        <Card>
            <CardContent>
                <div className="px-5">
                    <Badge>Confirmado</Badge>
                </div>
            </CardContent>
        </Card>

     );
}



 
export default BookingItem;