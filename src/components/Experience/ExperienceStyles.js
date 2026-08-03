import styled from 'styled-components'

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;
  margin: 24px 0 48px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`

export const ExperienceCard = styled.div`
  background: linear-gradient(180deg, rgba(23, 92, 230, 0.15) 0%, rgba(23, 92, 230, 0) 100%);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 24px;
  }
`

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
`

export const ExperienceRole = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: var(--text-primary);

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const ExperiencePeriod = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: var(--text-tertiary);
  white-space: nowrap;
`

export const ExperienceCompany = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`

export const ExperiencePoints = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ExperiencePoint = styled.li`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: var(--text-secondary);
  padding-left: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`

export const CertificationList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 32px;
  width: 100%;
  margin: 8px 0 24px;

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const CertificationItem = styled.li`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: var(--text-secondary);
  padding-left: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  }
`
