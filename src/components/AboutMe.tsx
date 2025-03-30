import { useEffect, useRef } from 'react';

const AboutMe = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const text = "Hi! I'm Anurag Bhattarai, a Computer Science student passionate about building innovative solutions and learning new technologies.";

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex < text.length && textRef.current) {
        currentText += text[currentIndex];
        textRef.current.textContent = currentText;
        currentIndex++;
        setTimeout(typeWriter, 50);
      }
    };

    typeWriter();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
            <p ref={textRef} className="text-xl text-gray-600 dark:text-gray-300 h-20"></p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Python','Java','React','HTML','CSS','JavaScript','AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:shadow-lg transition-shadow duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;