import React, { useEffect, useState, useRef } from 'react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef(null);

  const metrics = [
    { id: 1, value: 175.5, suffix: ' ตร.ม.', label: 'พื้นที่โครงการรวม (Total Area)' },
    { id: 2, value: 45, suffix: ' วัน', label: 'ระยะเวลาดำเนินงาน (Timeline)' },
    { id: 3, value: 3, suffix: ' เฟส', label: 'ช่วงการส่งมอบ (Phases)' },
    { id: 4, value: 100, suffix: '%', label: 'สถานะ: เตรียมการ (Preparation)' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
    
    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  // Simple counter animation hook logic inline for brevity
  const Counter = ({ end, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, isVisible]);

    return (
      <span className="text-4xl md:text-5xl font-extrabold text-heim-red drop-shadow-md">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={metricsRef} className="py-16 bg-white relative -mt-10 z-30">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 transform -translate-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric) => (
              <div key={metric.id} className="space-y-2">
                <Counter end={metric.value} suffix={metric.suffix} isVisible={isVisible} />
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
