import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Tweet } from 'react-twitter-widgets';
import CourseById from './CourseById';


class Landing extends React.Component {
  state = {};

  render() {
    return (
      <LandingHolder>
        <Section name="Splash">
          <TextHolder>
            <Title>Learn blockchain development</Title>
            <SubTitle>DAPPS - Smart Contracts - Crypto Fundamentals </SubTitle>
            <JoinButton to="/join">Join</JoinButton>
          </TextHolder>
        </Section>
        <SectionGradient>
          <CoursesTitleTop>Learn the latest blockchain tools</CoursesTitleTop>
          <TopCourses>
            <CoursesHolder name="CoursesHolder">
              <CourseById id={'5a19d397cec41aa0ec8cd410'} />
              <CourseById id={'5a18bef38a225da0719fc636'} />
              <CourseById id={'5a2f9afc0dc9ce0ab19badd7'} />
            </CoursesHolder>
          </TopCourses>
        </SectionGradient>
        <Section name="Splash">
          <MiddleBox>
            <PriceBox>
              <Price>$42</Price>/month
            </PriceBox>
            <PriceText>for unlimited access to videos and forums</PriceText>
            <JoinButton to="/join">Join</JoinButton>
          </MiddleBox>
        </Section>
        <SectionTweets name="Social Splash">
          <TwitterTitle>What people are saying</TwitterTitle>
          <TwitterHolder>
            <TweetStyle>
              <Tweet tweetId="939752782453714944" />
            </TweetStyle>
            <TweetStyle>
              <Tweet tweetId="939752782453714944" />
            </TweetStyle>
            <TweetStyle>
              <Tweet tweetId="939752782453714944" />
            </TweetStyle>
            <TweetStyle>
              <Tweet tweetId="939752782453714944" />
            </TweetStyle>
            <TweetStyle>
              <Tweet tweetId="939752782453714944" />
            </TweetStyle>
          </TwitterHolder>
        </SectionTweets>
      </LandingHolder>
    );
  }
}

export default Landing;

const TweetStyle = styled.div`
  width: 31%;
  margin-left: 8px;
  margin-right: 8px;
`;
const TwitterTitle = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const TwitterHolder = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LandingHolder = styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  height: -webkit-fill-available;
`;
const SectionTweets = Section.extend`
  justify-content: center;
`;
const SectionGradient = Section.extend`
  justify-content: center;
  background: rgba(8, 158, 204, 1);
  background: -moz-linear-gradient(
    -45deg,
    rgba(8, 158, 204, 1) 0%,
    rgba(10, 175, 153, 1) 52%,
    rgba(103, 186, 133, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(8, 158, 204, 1)),
    color-stop(52%, rgba(10, 175, 153, 1)),
    color-stop(100%, rgba(103, 186, 133, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(8, 158, 204, 1) 0%,
    rgba(10, 175, 153, 1) 52%,
    rgba(103, 186, 133, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(8, 158, 204, 1) 0%,
    rgba(10, 175, 153, 1) 52%,
    rgba(103, 186, 133, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(8, 158, 204, 1) 0%,
    rgba(10, 175, 153, 1) 52%,
    rgba(103, 186, 133, 1) 100%
  );
  background: linear-gradient(135deg, rgba(8, 158, 204, 1) 0%, rgba(10, 175, 153, 1) 52%, rgba(103, 186, 133, 1) 100%);
`;

const LeftSplash = styled.div`
  flex: 1;
`;

const LandingHolderText = styled.div``;

const RightSplash = styled.div`
  align-self: center;
  flex: 1;
`;
const RightSplashText = styled.div`
  font-size: 30px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  /* flex:1; */
`;
const SubTitle = styled.div`
  font-size: 30px;
  /* flex:1; */
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const JoinButton = styled(Link)`
  background: rgba(224, 82, 160, 1);
  background: -moz-linear-gradient(left, rgba(224, 82, 160, 1) 0%, rgba(241, 92, 66, 1) 100%);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(224, 82, 160, 1)),
    color-stop(100%, rgba(241, 92, 66, 1))
  );
  background: -webkit-linear-gradient(left, rgba(224, 82, 160, 1) 0%, rgba(241, 92, 66, 1) 100%);
  background: linear-gradient(to right, rgba(224, 82, 160, 1) 0%, rgba(241, 92, 66, 1) 100%);
  text-align: center;
  padding: 10px;
  border-radius: 13px;
  width: 101px;
  color: white;
  font-size: 25px;
  text-decoration: none;
`;

const TextHolder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CoursesTitleTop = styled.div`
  color: white;
  font-size: 30px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CoursesHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const CoursesTitle = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const CourseBox = styled.div`
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  border-radius: 5px;
  padding: 10px;
`;

const CoursesBoxImg = styled.img`
  width: 100%;
`;

const CoursesBoxTitle = styled.div`
  text-align: center;
`;

const CoursesBoxAuthor = styled.div``;
const CoursesBoxDesc = styled.div``;

const OuterBox = styled.div`
  margin-top: 50px;
`;

const TopCourses = styled.div`
  display: flex;
  flex-direction: row;
`;

const LineBreak = styled.div`
width: 100%;
margin-top: 20px;
margin-bottom: 10px;
height: .5px;
border: .5px solid black;
border-radius: 9px;
}
`;

const MiddleBox = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PriceBox = styled.div`
  font-size: 60px;
  flex-direction: row;
  display: flex;
  align-items: baseline;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 90px;
`;

const PriceText = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
`;
