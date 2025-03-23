"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const AnimateOnVisible = ({
  position = 0,
  children,
}: {
  position?: number;
  children: React.ReactNode;
}) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowAnimation(true);
          }, 250 + 100 * position);
          observer.unobserve(entry.target);
        }
      });
    });

    // @ts-ignore
    observer.observe(targetRef?.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <motion.div
        ref={targetRef}
        className="box"
        style={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {children}
      </motion.div>
      {/* <SlideFade offsetY="40px" in={showAnimation} ref={targetRef}>
        {children}
      </SlideFade> */}
    </>
  );
};

export default AnimateOnVisible;
