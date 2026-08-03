import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  column-gap: 2rem;
  padding: 2rem clamp(1rem, 4vw, 3rem) 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem 1rem 1rem;
    row-gap: 0.5rem;
    column-gap: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;

`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.75rem;
  flex: 1 1 260px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.25rem 1rem;
    flex-basis: 100%;
    order: 3;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 32px;
  color: var(--text-secondary);
  transition: 0.4s ease;
  white-space: nowrap;
  &:hover {
    color: var(--text-primary);
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 24px;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: var(--text-primary);
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: var(--bg-hover);
    transform: scale(1.2);
    cursor: pointer;

  }
`
