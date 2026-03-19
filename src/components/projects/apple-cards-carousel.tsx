'use client';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { data as allProjects, projectMeta } from './Data';

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const CARD_THEMES = [
  'linear-gradient(135deg, #7C3AED, #4338CA)',
  'linear-gradient(135deg, #2563EB, #0891B2)',
  'linear-gradient(135deg, #0891B2, #0D9488)',
  'linear-gradient(135deg, #059669, #0D9488)',
  'linear-gradient(135deg, #DC2626, #EA580C)',
  'linear-gradient(135deg, #D97706, #CA8A04)',
  'linear-gradient(135deg, #DB2777, #9333EA)',
  'linear-gradient(135deg, #9333EA, #DB2777)',
  'linear-gradient(135deg, #1D4ED8, #7C3AED)',
  'linear-gradient(135deg, #0D9488, #0891B2)',
  'linear-gradient(135deg, #7C3AED, #4F46E5)',
  'linear-gradient(135deg, #0284C7, #2563EB)',
];

const ACCENT_COLORS = [
  '#7C3AED', '#2563EB', '#0891B2', '#059669',
  '#DC2626', '#D97706', '#DB2777', '#9333EA',
  '#1D4ED8', '#0D9488', '#7C3AED', '#0284C7',
];

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({ onCardClose: () => {}, currentIndex: 0 });

export const Carousel = ({ items, initialScroll = 0 }: { items: React.ReactNode[]; initialScroll?: number }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 210 * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-3 mx-auto max-w-7xl">
            {items.map((item, index) => (
              <motion.div
                key={'card' + index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.06 * index } }}
                className="last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2 md:mr-20">
          <button
            className="relative z-40 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40 hover:bg-gray-200 transition-colors"
            onClick={() => carouselRef.current?.scrollBy({ left: -210, behavior: 'smooth' })}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            className="relative z-40 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40 hover:bg-gray-200 transition-colors"
            onClick={() => carouselRef.current?.scrollBy({ left: 210, behavior: 'smooth' })}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);
  const grad = CARD_THEMES[index % CARD_THEMES.length];
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const project = projectMeta[index];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.body.style.overflow = open ? 'hidden' : 'auto';
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  //@ts-ignore
  useOutsideClick(containerRef, () => handleClose());
  const handleClose = () => { setOpen(false); onCardClose(index); };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-52 h-screen overflow-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white font-sans shadow-2xl overflow-hidden"
            >
              <div style={{ background: grad, height: '5px' }} />
              <div className="flex justify-end px-8 pt-5 md:px-14">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 hover:bg-black transition-colors" onClick={handleClose}>
                  <IconX className="h-5 w-5 text-white" />
                </button>
              </div>
              <div className="px-8 pt-2 pb-0 md:px-14">
                <div className="inline-flex rounded-full px-3 py-1 mb-3" style={{ background: grad }}>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{card.category}</span>
                </div>
                <p className="text-2xl font-bold text-neutral-800 md:text-4xl">{card.title}</p>
              </div>
              <div className="px-8 pt-8 pb-14 md:px-14">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card — always white, color accent on hover */}
      <motion.button
        onClick={() => setOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '180px',
          height: '230px',
          boxShadow: isHovered
            ? `0 12px 32px ${accent}30`
            : '0 2px 8px rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.3s ease, transform 0.2s ease',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        className="relative flex flex-col overflow-hidden rounded-2xl text-left cursor-pointer flex-shrink-0 bg-white border border-neutral-100"
        whileTap={{ scale: 0.97 }}
      >
        {/* Top color strip */}
        <div style={{ height: '4px', background: grad, flexShrink: 0 }} />

        {/* Content */}
        <div className="flex flex-col flex-1 p-3 gap-1.5 overflow-hidden">

          {/* Category */}
          <span
            className="text-[8px] font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {card.category}
          </span>

          {/* Title */}
          <p className="text-[11px] font-bold text-neutral-900 leading-snug line-clamp-2">
            {card.title}
          </p>

          {/* Divider */}
          <div className="h-px bg-neutral-100 my-0.5" />

          {/* Description */}
          {project?.description && (
            <p className="text-[9px] text-neutral-500 leading-relaxed line-clamp-4 flex-1">
              {project.description}
            </p>
          )}

          {/* Tech pills */}
          {project?.techStack && (
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              {project.techStack.slice(0, 2).map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full px-1.5 py-0.5 text-[7px] font-semibold"
                  style={{ background: `${accent}12`, color: accent }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 2 && (
                <span className="rounded-full px-1.5 py-0.5 text-[7px] bg-neutral-100 text-neutral-400">
                  +{project.techStack.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn('transition duration-300', isLoading ? 'blur-sm' : 'blur-0', className)}
      onLoad={() => setLoading(false)}
      src={src} width={width} height={height}
      loading="lazy" decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt || 'Project card'}
      {...rest}
    />
  );
};