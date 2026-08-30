import TextType from '@/components/TextType';

const SocialProof = () => {
    return (
        <TextType 
            text={"A personal open-source portfolio project built with passion to explore modern web development and API integration."}
            typingSpeed={25}
            pauseDuration={5000}
            showCursor
            cursorCharacter="|"
            deletingSpeed={25}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            className='text-4xl md:text-4xl lg:text-5xl text-center lg:leading-16'
        />
    );
}
 
export default SocialProof;