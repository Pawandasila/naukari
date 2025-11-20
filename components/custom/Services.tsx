'use client';

import { Calendar1Icon, Coins, Layers, SearchIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const services = [
  {
    icon: SearchIcon,
    title: 'Permanent Staffing',
    desc: 'Find the right long-term talent to grow with your company. We source, screen, and select candidates who align with your vision and culture.'
  },
  {
    icon: Calendar1Icon,
    title: 'Temporary & Contract',
    desc: 'Gain flexibility with skilled temporary and contract professionals. Ideal for projects, seasonal peaks, and filling urgent needs.'
  },
  {
    icon: Coins,
    title: 'Recruitment Process Outsourcing',
    desc: 'We manage your entire recruitment lifecycle, acting as your internal hiring team to streamline processes and reduce costs.'
  }
];

const placements = [
  {
    name: 'Axis Bank',
    image: '/Axis.jpg',
    caption: 'Successfully placed multiple candidates in banking operations and customer service roles'
  },
  {
    name: 'HDFC Bank',
    image: '/hdfc.jpg',
    caption: 'Recruited talented professionals for various banking and financial positions'
  },
  {
    name: 'HDFC Life',
    image: '/hdfc-life.jpg',
    caption: 'Placed insurance advisors and sales executives in life insurance division'
  },
  {
    name: 'HDFC Life Insurance',
    image: '/hdfc-life-02.jpg',
    caption: 'Successful placements in insurance sector across multiple roles'
  },
  {
    name: 'Axis Bank',
    image: '/axis-2.jpg',
    caption: 'Consistently placing quality candidates in branch banking positions'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative -mt-1" id="services">
      <div className="pointer-events-none absolute inset-0 -z-10 "></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-500 ring-1 ring-blue-500/20 uppercase tracking-wide">
            <span className="material-symbols-outlined text-base"><Layers/></span> Our Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything You Need for Success
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We bridge the gap between qualified candidates and tailored opportunities across diverse industries.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3" role="list">
            {services.map((s, index) => (
              <motion.li 
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-white dark:bg-slate-900/40 ring-1 ring-slate-200 dark:ring-white/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
                    <s.icon size={24} />
                  </span>
                  <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white pr-2">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition-colors"></div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Our Placement Records Section */}
        <div className="mx-auto mt-24 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-500 ring-1 ring-blue-500/20 uppercase tracking-wide">
              <span className="material-symbols-outlined text-base">workspace_premium</span> Placement Records
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Our Successful Placements
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We have successfully placed talented professionals in leading organizations across banking and financial sectors.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 w-full"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
            //   navigation={true}
              loop={true}
              
              className="w-full pb-14"
              style={{ width: '100%', height: 'auto' }}
            >
              {placements.map((placement, index) => (
                <SwiperSlide key={`${placement.name}-${index}`} className="h-auto">
                  <div className="group relative overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="aspect-square relative overflow-hidden bg w-full">
                      <Image
                        src={placement.image}
                        alt={placement.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain  transition-transform duration-700"
                        priority={index < 3}
                      />
                      {/* <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" /> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;