import Typewriter, { TypewriterClass } from 'typewriter-effect';
import typingText from '../../data/typingText';

const Technologies = () => {
  const handleTypewriter = (typewriter: TypewriterClass) => {
    typingText.forEach(text => {
      typewriter.typeString(text).changeDelay(40).start();
    });
  };

  return (
    <div className="text-custom-white text-sm">
      <Typewriter onInit={handleTypewriter} options={{ loop: true, deleteSpeed: 10 }} />
    </div>
  );
};

export default Technologies;
