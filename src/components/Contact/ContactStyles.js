import styled from 'styled-components';

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 56px 48px;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  background: linear-gradient(180deg, rgba(148, 93, 214, 0.12) 0%, rgba(19, 173, 199, 0.05) 100%);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 40px 24px;
    border-radius: 16px;
  }
`;

export const ContactCTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;

  & > * {
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

export const ContactSocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
`;
