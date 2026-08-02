import styled from 'styled-components';

export const FabButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #0f1624;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  svg {
    transition: transform 0.4s ease;
  }

  &:hover {
    background: #17233a;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }

  &:hover svg {
    transform: rotate(75deg);
  }

  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 48px;
    height: 48px;
    bottom: 16px;
    right: 16px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

export const Panel = styled.div`
  position: fixed;
  bottom: 92px;
  right: 24px;
  width: 320px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  background: #131b2c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
  z-index: 10000;
  padding: 20px;
  transform-origin: bottom right;
  transform: ${(props) => (props.open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(8px)')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  transition: transform 0.25s ease, opacity 0.25s ease, visibility 0.25s;

  @media ${(props) => props.theme.breakpoints.sm} {
    right: 16px;
    bottom: 76px;
    width: calc(100vw - 32px);
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const PanelTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  &:focus {
    outline: none;
  }
`;

export const SettingGroup = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SettingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const SettingLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SettingLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SettingDescription = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

export const ToggleTrack = styled.button`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  border: none;
  flex-shrink: 0;
  background: ${(props) => (props.checked ? 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)' : 'rgba(255, 255, 255, 0.15)')};
  cursor: pointer;
  transition: background 0.25s ease;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const ToggleThumb = styled.span`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.checked ? '22px' : '2px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: left 0.25s ease;
`;

export const ColorSwatchRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

export const ColorSwatch = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: 2px solid ${(props) => (props.selected ? '#fff' : 'transparent')};
  box-shadow: ${(props) => (props.selected ? '0 0 0 2px rgba(255,255,255,0.25)' : 'none')};
  cursor: pointer;
  transition: transform 0.2s ease, border 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }

  &:focus {
    outline: none;
  }
`;

export const SliderGroup = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SliderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SliderLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SliderLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
`;

export const SliderValue = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
`;

export const SliderInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    transition: transform 0.15s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    transition: transform 0.15s ease;
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.15);
  }

  &::-moz-range-track {
    height: 4px;
    border-radius: 999px;
    background: transparent;
  }

  &:focus {
    outline: none;
  }
`;

export const LockedWrap = styled.div`
  position: relative;
  display: inline-flex;

  &:hover span[data-tooltip],
  &:focus-within span[data-tooltip] {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  background: #0a0f1a;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 12px;
    border: 5px solid transparent;
    border-top-color: #0a0f1a;
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  margin-top: 4px;
  padding: 10px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, border 0.2s ease, background 0.2s ease;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.05);
  }

  &:focus {
    outline: none;
  }
`;
