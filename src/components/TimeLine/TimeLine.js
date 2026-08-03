import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemText, CarouselItemTitle, CarouselItemWrapper } from './TimeLineStyles';
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

  const handleClick = (e, i) => {
    e.preventDefault();
    scrollToIndex(i);
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

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

    setActiveItem(closestIndex);
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

  return (
    <Section id="about">
      <SectionTitle>Timeline</SectionTitle>
      <SectionText>
        Creativity and improvisation has always been mind-boggling for me. <br/>
        My first true encounter with programming was almost 10 years ago with the Unity Game Design Engine. <br/>
        I instantly fell in love, and learned to make a few basic projects. I had even started a basic Game Development club that same year in my school.<br/>
        Since then, I have shifted less from game design and more towards a corporate aspect of the polish and professionalism of web development.
      </SectionText>
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
