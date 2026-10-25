import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const checkActiveSection = () => {
      // Choose a detection point near the top of the screen.
      const detectionPoint = window.innerHeight * 0.3;

      let closestSection = '';
      let smallestDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();

        // Ignore sections that are completely outside the viewport.
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          return;
        }

        // Measure the distance from the section's top to the detection point.
        const distance = Math.abs(rect.top - detectionPoint);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = id;
        }
      });

      // Update only when a valid section is found.
      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    checkActiveSection();

    window.addEventListener('scroll', checkActiveSection, {
      passive: true,
    });

    window.addEventListener('resize', checkActiveSection);

    return () => {
      window.removeEventListener('scroll', checkActiveSection);
      window.removeEventListener('resize', checkActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}