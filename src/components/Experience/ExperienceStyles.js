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
  grid-column: ${(props) => props.$featured ? '1 / -1' : 'auto'};

  @media ${props => props.theme.breakpoints.sm} {
    padding: 24px;
  }
`

export const ClientsLabel = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin: 24px 0 16px;
`

export const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`

export const ClientCard = styled.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const ClientLogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 40px;
  padding: 0 14px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 14px;

  img {
    height: 22px;
    width: auto;
    object-fit: contain;
  }
`

export const ClientHeaderRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`

export const ClientName = styled.h5`
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
`

export const ClientSector = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  white-space: nowrap;
`

export const ClientBlurb = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  color: var(--text-secondary);
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

export const EducationCard = styled.div`
  background: linear-gradient(135deg, rgba(148, 93, 214, 0.18) 0%, rgba(19, 173, 199, 0.08) 100%);
  border: 1px solid var(--border-color-strong);
  border-radius: 16px;
  padding: 32px;
  margin: 24px 0 40px;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 24px;
  }
`

export const EducationTopRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`

export const EducationDegree = styled.h3`
  font-weight: 800;
  font-size: 26px;
  line-height: 32px;
  color: var(--text-primary);

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 26px;
  }
`

export const EducationPeriod = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: var(--text-tertiary);
  white-space: nowrap;
`

export const EducationInstitution = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-top: 2px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`

export const EducationClassification = styled.span`
  display: inline-block;
  width: fit-content;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #ffffff;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  padding: 5px 14px;
  border-radius: 999px;
  margin: 14px 0 14px;
`

export const EducationHighlight = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 23px;
  color: var(--text-secondary);
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
