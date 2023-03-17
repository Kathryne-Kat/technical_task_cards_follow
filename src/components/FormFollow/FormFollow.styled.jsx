import styled from 'styled-components';

export const Section = styled.section`
  width: 380px;
  height: 460px;
  display: block;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  /* background-image: url('../../img/picture2.png');
  background-position: 20px 20px;
  background-size: 308px 168px; */
  box-shadow: -2.6px 6.9px 20.6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  display: block;
  width: 76px;
  height: 22px;
`;

export const ImgSvg = styled.img`
  /* margin-top: 20px; */
  margin-left: 35px;
  display: block;
  margin: 0 auto;
  width: 308px;
  height: 168px;
  animation: animateX30Y30 5s infinite 3s;
  @keyframes animateX30Y30 {
    0% {
      transform: skew(0deg);
    }

    50% {
      transform: skew(5deg, 5deg);
    }

    100% {
      transform: skew(0deg);
    }
  }
`;

export const AvatarBorder = styled.div`
  position: relative;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 20px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.06),
    inset 0px -1.7px 3.4px #ae7be3, inset 0px 3.4px 2.6px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  top: -40px;
  left: 150px;
  display: block;
  width: 64px;
  height: 64px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.4px 4.4px rgba(0, 0, 0, 0.06),
    inset 0px -2.2px 4.4px #ae7be3, inset 0px 1px 3.3px #fbf8ff;
  border-radius: 50%;
  /* &::after {
    content: '';
    display: block;
    height: 8px;
     border: 8px solid #ebd8ff; 
    background: #ebd8ff;
    box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.06),
      inset 0px -1.7px 3.4px #ae7be3, inset 0px 3.4px 2.6px #fbf8ff;
  } */
`;

export const Tweets = styled.p`
  margin-top: 62px;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Follow = styled.p`
  margin-top: 16px;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 26px;

  width: 196px;
  height: 50px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #373737;

  /* background: #ebd8ff; */
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3px;
`;
