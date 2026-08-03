import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: rgba(19, 173, 199, 0.08);
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
    padding: 6px 12px;
    margin-top: 24px;
  }
`;

export const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  flex-shrink: 0;
`;

export const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;

  & > * {
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    width: 100%;
  }
`;
