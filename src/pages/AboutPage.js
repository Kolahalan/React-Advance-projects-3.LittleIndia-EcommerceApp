import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            At <b>Little India</b>, we strive to provide the best shopping
            experience for Indians living outside of India. We offer a great
            selection of products from India and around the world, giving you
            access to the things you love. Whether you're looking for
            traditional Indian clothing, spices, snacks, or anything in between,
            you'll find it here. We understand that living abroad can be a
            challenge. We want to make sure that you are able to get the things
            you need to make your life easier. We also understand that it can be
            hard to be away from home. That's why we are committed to bringing a
            little bit of India to you, no matter where you are.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
