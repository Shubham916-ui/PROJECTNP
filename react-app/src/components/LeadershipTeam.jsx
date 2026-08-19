import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sandeepPortrait from '../assets/images/leadership/sandeep.webp';
import manishPortrait from '../assets/images/leadership/manish.webp';
import mayankPortrait from '../assets/images/leadership/mayank.webp';

const leaders = [
    {
        name: "Sandeep Kumar Agrawal",
        designation: "Chairman & CEO",
        bio: "A visionary entrepreneur with decades of experience in manufacturing and global trade, leading the company with innovation, integrity, and a commitment to sustainable growth",
        image: sandeepPortrait,
        quote: "Visionary leadership and operational excellence shape our sustainable future."
    },
    {
        name: "Manish Garg",
        designation: "Chief Commercial Officer (CCO)",
        bio: "A seasoned industry leader with 20+ years of experience, driving business growth, strategic partnerships, and commercial excellence across the organization.",
        image: manishPortrait,
        quote: "Delivering unmatched commercial value and customer-centric growth worldwide."
    },
    {
        name: "Mayank Agrawal",
        designation: "Chief Financial Officer (CFO)",
        bio: "Mayank oversees the company's financial strategies, fiscal compliance, risk management, and capital structure to ensure long-term stability and sustainable growth.",
        image: mayankPortrait,
        quote: "Financial discipline and strategic capital planning are key to powering our industrial vision."
    }
];

const LeadershipTeam = () => {
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isInView = useInView(containerRef, { once: true, amount: 0.15 });

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
        }
    };

    const carouselVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative bg-[#060606] text-white py-24 md:py-32 overflow-hidden"
            id="leadership"
        >
            {/* Elegant Luxury Background Accents */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-neutral-950 to-neutral-950 pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none hidden md:block" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none hidden md:block" />

            {/* Fine Luxury Grid Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container relative z-10 max-w-7xl mx-auto px-6">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="text-center md:text-left max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="inline-block text-[11px] font-bold tracking-[0.25em] text-amber-500 uppercase mb-3 font-mono"
                        >
                            Executive Leadership
                        </motion.span>
                        <motion.h2
                            variants={titleVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-100 to-amber-200 bg-clip-text text-transparent"
                        >
                            Our Leadership
                        </motion.h2>
                        <motion.p
                            variants={subtitleVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-neutral-400 text-lg mt-4 font-light leading-relaxed"
                        >
                            The visionaries behind our manufacturing excellence.
                        </motion.p>
                    </div>

                    {/* Navigation Buttons (Desktop Only) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hidden md:flex gap-4 items-center justify-center"
                    >
                        <button
                            onClick={() => swiperRef.current?.swiper.slidePrev()}
                            className="w-14 h-14 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-amber-500 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer"
                            aria-label="Previous leadership card"
                        >
                            <FiArrowLeft className="text-xl group-hover:-translate-x-0.5 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.swiper.slideNext()}
                            className="w-14 h-14 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-amber-500 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer"
                            aria-label="Next leadership card"
                        >
                            <FiArrowRight className="text-xl group-hover:translate-x-0.5 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <motion.div
                    variants={carouselVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative px-2 py-4"
                >
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={false}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            }
                        }}
                        className="leadership-swiper !overflow-visible"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {leaders.map((leader, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="group relative rounded-[24px] overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 md:hover:scale-[1.03] md:hover:border-amber-500/30 md:hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] flex flex-col h-[560px] cursor-grab active:cursor-grabbing transform-gpu will-change-transform">

                                    {/* Portrait Header */}
                                    <div className="relative h-[360px] overflow-hidden rounded-t-[24px]">
                                        {/* Image Overlay Dark Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/35 to-transparent z-10 transition-opacity duration-500 md:group-hover:opacity-90" />

                                        {/* Golden overlay light effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top md:filter md:contrast-[1.05] md:brightness-[0.95] md:group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                                            loading="lazy"
                                            decoding="async"
                                        />

                                        {/* Name and Designation Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase mb-2 block font-mono">
                                                {leader.designation}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white tracking-wide font-sans">
                                                {leader.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content/Bio Section */}
                                    <div className="p-6 flex-grow flex flex-col justify-between bg-[#0b0b0b] rounded-b-[24px] relative z-20">
                                        <div>
                                            <p className="text-neutral-400 text-[14px] leading-relaxed font-light font-sans tracking-wide">
                                                {leader.bio}
                                            </p>
                                        </div>

                                        {/* Custom Quote on hover/details */}
                                        <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-start">
                                            <div className="flex items-center gap-1.5 text-neutral-600 md:group-hover:text-amber-500/50 transition-colors duration-300">
                                                <FaQuoteLeft className="text-xs" />
                                                <span className="text-[10px] uppercase font-mono tracking-widest leading-none">
                                                    Vision
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Mobile indicators / pagination (Custom CSS dots styled below) */}
                <div className="mt-8 flex md:hidden justify-center gap-2">
                    {leaders.map((_, idx) => (
                        <span
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx
                                    ? 'w-8 bg-amber-500'
                                    : 'w-2 bg-neutral-800'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LeadershipTeam;
