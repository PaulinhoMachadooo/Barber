import Image from "next/image";
import { Card, CardContent } from "./ui/card"
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between" >
                 <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
                 <Button variant="outline" size="icon">
                    <MenuIcon />
                 </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;