import typingText from '@/data/typingText';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

const ReactComponentAnimation = () => {
  const handleTypewriter = (typewriter: TypewriterClass) => {
    typingText.forEach(text => {
      typewriter.typeString(text).start();
    });
  };

  return (
    <div className="text-custom-white text-sm h-full">
      <Typewriter
        onInit={handleTypewriter}
        options={{
          strings: typingText,
          deleteSpeed: 10,
          delay: 20,
        }}
      />
    </div>
  );
};

export default ReactComponentAnimation;
