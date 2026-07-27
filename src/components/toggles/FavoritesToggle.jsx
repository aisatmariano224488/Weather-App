import Favorites from "@/components/weather/Favorites";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Star } from "lucide-react";

const FavoritesToggle = () => {
    return (

        <Drawer swipeDirection="right">
            <DrawerTrigger
                render={
                    <Button
                        size="base"
                        className="w-10 cursor-pointer"
                        variant="secondary"
                        
                    >
                        <Star />
                    </Button>
                }
            >
            </DrawerTrigger>

            <DrawerContent className="tracking-wide">
                <DrawerHeader>
                    <DrawerTitle>Favorites</DrawerTitle>
                </DrawerHeader>

                <div className="p-4">
                    <Favorites />
                </div>
                <DrawerFooter>
                    <DrawerClose render={<Button variant="secondary" />}>Cancel</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
 
export default FavoritesToggle;