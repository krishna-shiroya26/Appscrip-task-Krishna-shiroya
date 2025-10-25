'use client';
import React, { useState } from 'react';
import {
  FooterContainer,
  TopSection,
  NewsletterSection,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterForm,
  EmailInput,
  SubscribeButton,
  ContactCurrencySection,
  ContactSection,
  CurrencySection,
  SectionTitle,
  ContactInfo,
  ContactItem,
  DiamondBullet,
  CurrencySelector,
  FlagIcon,
  CurrencyText,
  CurrencyNote,
  Separator,
  MiddleSection,
  FooterSection,
  SectionHeader,
  ChevronIcon,
  SectionContent,
  LinkList,
  LinkItem,
  FooterLink,
  SocialIcons,
  SocialIcon,
  BottomSection,
  PaymentSection,
  PaymentTitle,
  PaymentMethods,
  PaymentMethod,
  CopyrightSection,
  CopyrightText
} from './styles';

const Footer: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [email, setEmail] = useState('');

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing with email:', email);
      setEmail('');
    }
  };

  const brandLinks = [
    'About Us',
    'Stories',
    'Artisans',
    'Boutiques',
    'Contact Us',
    'EU Compliances Docs'
  ];

  const quickLinks = [
    'Orders & Shipping',
    'Join/Login as a Seller',
    'Payment & Pricing',
    'Return & Refunds',
    'FAQs',
    'Privacy Policy',
    'Terms & Conditions'
  ];

  const paymentMethods = [
    { name: 'G Pay', color: '#fff' },
    { name: 'Mastercard', color: '#EB001B' },
    { name: 'PayPal', color: '#0070BA' },
    { name: 'AMEX', color: '#006FCF' },
    { name: 'Apple Pay', color: '#000' },
    { name: 'Shop Pay', color: '#5A31F4' }
  ];

  return (
    <FooterContainer>
      {/* Top Section */}
      <TopSection>
        <NewsletterSection>
          <NewsletterTitle>BE THE FIRST TO KNOW</NewsletterTitle>
          <NewsletterDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
          </NewsletterDescription>
          <NewsletterForm onSubmit={handleSubscribe}>
            <EmailInput
              type="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit">SUBSCRIBE</SubscribeButton>
          </NewsletterForm>
        </NewsletterSection>

        <ContactCurrencySection>
          <ContactSection>
            <SectionTitle>CALL US</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <DiamondBullet>◆</DiamondBullet>
                +44 221 133 5360
              </ContactItem>
              <ContactItem>
                <DiamondBullet>◆</DiamondBullet>
                customercare@mettamuse.com
              </ContactItem>
            </ContactInfo>
          </ContactSection>

          <CurrencySection>
            <SectionTitle>CURRENCY</SectionTitle>
            <CurrencySelector>
              <FlagIcon>🇺🇸</FlagIcon>
              <DiamondBullet>◆</DiamondBullet>
              <CurrencyText>USD</CurrencyText>
            </CurrencySelector>
            <CurrencyNote>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </CurrencyNote>
          </CurrencySection>
        </ContactCurrencySection>
      </TopSection>

      <Separator />

      {/* Middle Section */}
      <MiddleSection>
        <FooterSection>
          <SectionHeader onClick={() => toggleSection('brand')}>
            <SectionTitle>mettä muse</SectionTitle>
            <ChevronIcon className={expandedSections.brand ? 'expanded' : ''} />
          </SectionHeader>
          <SectionContent className={expandedSections.brand ? 'expanded' : ''}>
            <LinkList>
              {brandLinks.map((link, index) => (
                <LinkItem key={index}>
                  <FooterLink href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link}
                  </FooterLink>
                </LinkItem>
              ))}
            </LinkList>
          </SectionContent>
        </FooterSection>

        <FooterSection>
          <SectionHeader onClick={() => toggleSection('quick')}>
            <SectionTitle>QUICK LINKS</SectionTitle>
            <ChevronIcon className={expandedSections.quick ? 'expanded' : ''} />
          </SectionHeader>
          <SectionContent className={expandedSections.quick ? 'expanded' : ''}>
            <LinkList>
              {quickLinks.map((link, index) => (
                <LinkItem key={index}>
                  <FooterLink href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link}
                  </FooterLink>
                </LinkItem>
              ))}
            </LinkList>
          </SectionContent>
        </FooterSection>

        <FooterSection>
          <SectionHeader onClick={() => toggleSection('social')}>
            <SectionTitle>FOLLOW US</SectionTitle>
            <ChevronIcon className={expandedSections.social ? 'expanded' : ''} />
          </SectionHeader>
          <SectionContent className={expandedSections.social ? 'expanded' : ''}>
            <SocialIcons>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                📷
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                in
              </SocialIcon>
            </SocialIcons>
          </SectionContent>
        </FooterSection>
      </MiddleSection>

      <Separator />

      {/* Bottom Section */}
      <BottomSection>
        <PaymentSection>
          <PaymentTitle>mettä muse ACCEPTS</PaymentTitle>
          <PaymentMethods>
            {paymentMethods.map((method, index) => (
              <PaymentMethod key={index} style={{ backgroundColor: method.color, color: method.color === '#000' ? '#fff' : '#000' }}>
                {method.name}
              </PaymentMethod>
            ))}
          </PaymentMethods>
        </PaymentSection>

        <CopyrightSection>
          <CopyrightText>Copyright © 2023 mettamuse. All rights reserved.</CopyrightText>
        </CopyrightSection>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
