import React from 'react';

const Process = () => {
  const steps = [
    {
      title: 'Site Preparation & Demolition',
      desc: 'รื้อถอนพื้นผิวเดิมและเคลียร์พื้นที่ให้พร้อมสำหรับการบดอัด',
      img: '/process-1.jpg'
    },
    {
      title: 'Compaction & Subgrade',
      desc: 'บดอัดชั้นดินเดิมและหินคลุกด้วยรถบดสั่นสะเทือน เพื่อให้ได้ค่าความแน่นตามมาตรฐานวิศวกรรม',
      img: '/process-2.jpg'
    },
    {
      title: 'Concrete Pouring & RC Slab',
      desc: 'เทคอนกรีตเสริมเหล็ก (RC Slab) หนา 200 มม. พร้อมปรับระดับความลาดเอียง',
      img: '/process-3.jpg'
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heim-blue mb-4">Behind the <span className="text-heim-red">Scenes</span></h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ภาพเบื้องหลังการทำงานจริงในแต่ละขั้นตอน เราใส่ใจทุกรายละเอียดตั้งแต่การเตรียมหน้าดินไปจนถึงโครงสร้างคอนกรีต
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-heim-red text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
