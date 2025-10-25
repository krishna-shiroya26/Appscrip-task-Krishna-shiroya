import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 40px 24px 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  @media (min-width: 768px) {
    padding: 60px 96px 30px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const NewsletterSection = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const NewsletterTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const NewsletterDescription = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EmailInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #fff;
  background: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 4px;
  
  &::placeholder {
    color: #9CA3AF;
  }
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
  }
`;

export const SubscribeButton = styled.button`
  padding: 12px 24px;
  background: #000;
  color: #fff;
  border: 1px solid #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    background: #fff;
    color: #000;
  }
  
  @media (min-width: 768px) {
    min-width: 120px;
  }
`;

export const ContactCurrencySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const ContactSection = styled.div`
  flex: 1;
`;

export const CurrencySection = styled.div`
  flex: 1;
`;

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactItem = styled.span`
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DiamondBullet = styled.span`
  color: #fff;
  font-size: 12px;
`;

export const CurrencySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const FlagIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #000;
`;

export const CurrencyText = styled.span`
  font-size: 14px;
  color: #fff;
`;

export const CurrencyNote = styled.p`
  font-size: 12px;
  color: #9CA3AF;
  margin: 0;
  line-height: 1.4;
`;

export const Separator = styled.hr`
  border: none;
  height: 1px;
  background: #374151;
  margin: 24px 0;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  
  @media (max-width: 767px) {
    border-bottom: 1px solid #374151;
    padding-bottom: 16px;
  }
`;

export const SectionHeader = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #374151;
  margin-bottom: 16px;
  
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;


export const ChevronIcon = styled.div`
  width: 16px;
  height: 16px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
  transition: transform 0.2s;
  display: none;
  
  @media (max-width: 767px) {
    display: block;
  }
  
  &.expanded {
    transform: rotate(225deg);
  }
`;

export const SectionContent = styled.div`
  @media (max-width: 767px) {
    display: none;
    
    &.expanded {
      display: block;
    }
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li`
  margin: 0;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const PaymentSection = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

export const PaymentTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const PaymentMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const PaymentMethod = styled.div`
  padding: 8px 12px;
  background: #fff;
  color: #000;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 60px;
  justify-content: center;
`;

export const CopyrightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media (max-width: 767px) {
    justify-content: center;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #fff;
  margin: 0;
`;
