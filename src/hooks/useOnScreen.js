import { useEffect, useState, useRef } from 'react';

const useOnScreen = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        console.log('se ejecuto el unobserve');
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, visible];
};
export default useOnScreen;
