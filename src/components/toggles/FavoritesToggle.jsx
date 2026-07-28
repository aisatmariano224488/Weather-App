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
                        aria-label="Open favorites"
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

                <div className="min-h-0 flex-1 overflow-y-auto p-4">
                    <Favorites />
                </div>
                <DrawerFooter>
                    <DrawerClose render={<Button variant="secondary" aria-label="Close favorites" />}>Cancel</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
 
export default FavoritesToggle;