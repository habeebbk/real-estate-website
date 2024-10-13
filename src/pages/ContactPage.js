import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const HeroSection = styled.section`
  background-image: url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600');
  background-size: cover;
  background-position: center;
  height: 300px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin: 0;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: 300;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
`;

const ContactItemTitle = styled.h3`
  margin: 0 0 5px;
  font-weight: bold;
`;

const ContactItemDetails = styled.p`
  margin: 0;
`;

const Map = styled.div`
  margin: 20px 0;
  height: 300px;
  background-color: #e0e0e0;
`;

const SocialMedia = styled.div`
  margin: 20px 0;
`;

const SocialIcon = styled.a`
  color: #007bff;
  font-size: 2em;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

function ContactPage() {
  return (
    <ContactPageContainer>
      <HeroSection>
        <HeroTitle>Contact Us</HeroTitle>
        <HeroSubtitle>We'd love to hear from you!</HeroSubtitle>
      </HeroSection>

      <ContactForm>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea id="message" name="message" required></FormTextarea>
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>

      <ContactInfo>
        <ContactItem>
          <ContactItemTitle>Email</ContactItemTitle>
          <ContactItemDetails>contact@example.com</ContactItemDetails>
        </ContactItem>
        <ContactItem>
          <ContactItemTitle>Phone</ContactItemTitle>
          <ContactItemDetails>(123) 456-7890</ContactItemDetails>
        </ContactItem>
        <ContactItem>
          <ContactItemTitle>Address</ContactItemTitle>
          <ContactItemDetails>123 Main St, Anytown, USA</ContactItemDetails>
        </ContactItem>
      </ContactInfo>

      <Map>
        {/* Embed a Google Map or similar map service here */}
      </Map>

      <SocialMedia>
        <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </SocialMedia>
    </ContactPageContainer>
  );
}

export default ContactPage;
