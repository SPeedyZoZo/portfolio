import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemText, CarouselItemTitle, CarouselItemWrapper, CarouselNavButton, CarouselWrapper } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    const item = container?.querySelector(`[data-carousel-item="${index}"]`);
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const targetLeft = container.scrollLeft + (itemRect.left - containerRect.left);

    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  // Reads the current position directly from the DOM rather than React state,
  // so rapid clicks (faster than a smooth-scroll animation + re-render can
  // settle) always compute the next step from where the carousel actually
  // is, not a potentially stale `activeItem`.
  const getClosestIndex = () => {
    const container = carouselRef.current;
    if (!container) return 0;

    // The last item has trailing padding (so it doesn't sit flush against
    // the edge), which throws off the distance-based heuristic below right
    // at max scroll — it never reads as "closest" because its left edge has
    // scrolled past zero. Handle the start/end scroll extremes explicitly.
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScrollLeft - 1) return TOTAL_CAROUSEL_COUNT - 1;
    if (container.scrollLeft <= 0) return 0;

    const containerRect = container.getBoundingClientRect();
    const items = Array.from(container.querySelectorAll('[data-carousel-item]'));

    let closestIndex = 0;
    let closestDistance = Infinity;
    items.forEach((item) => {
      const distance = Math.abs(item.getBoundingClientRect().left - containerRect.left);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = Number(item.dataset.carouselItem);
      }
    });

    return closestIndex;
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    scrollToIndex(i);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    setActiveItem(getClosestIndex());
  };

  // The arrow buttons step by one card-width rather than snapping a specific
  // item to the container's left edge (what scrollToIndex/dots do). Snapping
  // breaks down near the end: the second-to-last item is often already
  // fully visible without moving, so the "aligned" target overshoots past
  // the max scrollable position and gets silently clamped to a no-op —
  // clicking "previous" from the last item would do nothing.
  const getStep = () => {
    const container = carouselRef.current;
    const firstItem = container?.querySelector('[data-carousel-item]');
    if (!container || !firstItem) return 200;
    const gap = parseFloat(getComputedStyle(container).columnGap || '16');
    return firstItem.getBoundingClientRect().width + gap;
  };

  const handlePrev = () => {
    const container = carouselRef.current;
    if (!container) return;
    container.scrollTo({ left: Math.max(container.scrollLeft - getStep(), 0), behavior: 'smooth' });
  };

  const handleNext = () => {
    const container = carouselRef.current;
    if (!container) return;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    container.scrollTo({ left: Math.min(container.scrollLeft + getStep(), maxScrollLeft), behavior: 'smooth' });
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      carouselRef.current?.scrollTo({ left: 0 });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Translate vertical (wheel/trackpad) scrolling into horizontal carousel
  // movement while the pointer is over it, so it's scrollable the same way
  // as the rest of the page instead of needing a horizontal-only gesture.
  // Uses a native (non-passive) listener so preventDefault actually works —
  // React's synthetic onWheel is passive by default and can't stop the page
  // from scrolling too. Falls through to normal page scroll once the
  // carousel hits either end, so it never traps the scroll.
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return undefined;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const atStart = container.scrollLeft <= 0;
      const atEnd = container.scrollLeft >= maxScrollLeft - 1;

      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>Timeline</SectionTitle>
      <SectionText>
        Creativity and improvisation has always been mind-boggling for me. <br/>
        My first true encounter with programming was almost 10 years ago with the Unity Game Design Engine. <br/>
        I instantly fell in love, and learned to make a few basic projects. I had even started a basic Game Development club that same year in my school.<br/>
        Since then, I have shifted less from game design and more towards a corporate aspect of the polish and professionalism of web development.
      </SectionText>
      <CarouselWrapper>
        <CarouselNavButton
          type="button"
          $direction="prev"
          onClick={handlePrev}
          disabled={activeItem === 0}
          aria-label="Previous year"
        >
          <AiOutlineLeft size="1.6rem" />
        </CarouselNavButton>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          {TimeLineData.map((item, index) => (
            <CarouselItemWrapper key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                data-carousel-item={index}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselItemWrapper>
          ))}
        </CarouselContainer>
        <CarouselNavButton
          type="button"
          $direction="next"
          onClick={handleNext}
          disabled={activeItem === TOTAL_CAROUSEL_COUNT - 1}
          aria-label="Next year"
        >
          <AiOutlineRight size="1.6rem" />
        </CarouselNavButton>
      </CarouselWrapper>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type="button"
          aria-label={`Jump to ${item.year}`}
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
