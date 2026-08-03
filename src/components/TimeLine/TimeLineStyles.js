
import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  position: relative;
`

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.$direction === 'prev' ? 'left: -18px;' : 'right: -18px;'}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease, opacity 0.2s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--bg-hover);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.92);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 34px;
    height: 34px;
    ${(props) => props.$direction === 'prev' ? 'left: -12px;' : 'right: -12px;'}
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  width: 100%;
  list-style: none;
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  padding: 4px 4px 12px;
  margin-bottom: 40px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    gap: 10px;
    margin-bottom: 8px;
  }
`
export const CarouselItemWrapper = styled.li`
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: start;

  &:last-of-type {
    padding-right: ${({ final }) => final ? '40%' : '0'};
  }
`

export const CarouselItem = styled.div`
  background: var(--bg-card-alt);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  width: 180px;
  cursor: pointer;
  transition: opacity 0.25s ease, border-color 0.25s ease;
  opacity: ${(props) => props.active === props.index ? '1' : '0.55'};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 150px;
    padding: 14px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 130px;
    padding: 10px;
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, var(--text-heading-start) 10%, var(--text-heading-end) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: var(--text-secondary);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
  }
`
export const CarouselButtons = styled.div`
  display: flex;
  margin-bottom: 48px;
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: var(--text-primary);
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
