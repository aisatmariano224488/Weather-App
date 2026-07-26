import ThemeToggle from "@/components/toggles/ThemeToggle";
import UnitToggle from "@/components/toggles/UnitToggle";
import { ButtonGroup } from "@/components/ui/button-group";
import AnimatedContent from "@/components/AnimatedContent";
import SearchBar from "@/components/search/SearchBar";

const Header = ({ searchVisibility }) => {

    return (
        <AnimatedContent 
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            delay={0.1}
            className="flex items-center gap-16 py-2 md:py-4 fixed top-0 right-0 z-50 w-fit m-8 bg-background px-4 rounded-full"
        >
            <div className={`${searchVisibility ? '' : 'hidden'}`}>
                <SearchBar />
            </div>

            <ButtonGroup>
                <ThemeToggle />
                <UnitToggle />
            </ButtonGroup>
        </AnimatedContent>
    );
}
 
export default Header;