import TextType from '@/components/TextType';

const SocialProof = () => {
    return (
        <TextType 
            text={"A personal open-source portfolio project built with passion to explore modern web development and API integration."}
            typingSpeed={25}
            pauseDuration={2000}
            showCursor
            cursorCharacter="|"
            deletingSpeed={25}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            className='text-2xl md:text-3xl lg:text-4xl text-center font-semibold leading-12'
        />
    );
}
 
export default SocialProof;