import styled from 'styled-components';
import bgPicture from '../../img/picture.svg';

export const Card = styled.li`
  width: 280px;
  height: 460px;
  display: block;
  background: url(${bgPicture}) center 28px / 308px 168px no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.6px 6.9px 20.6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  @media (min-width: 480px) {
    width: 380px;
  }
`;

export const Logo = styled.img`
  display: block;
  padding-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
`;

export const AvatarBorder = styled.div`
  position: relative;
  margin-top: 172px;
  min-width: 280px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.06),
    inset 0px -1.7px 3.4px #ae7be3, inset 0px 3.4px 2.6px #fbf8ff;
  @media (min-width: 480px) {
    width: 380px;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: -40px;
  left: 100px;
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
  @media (min-width: 480px) {
    top: -40px;
    left: 150px;
  }
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
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3px;
  background-color: #ebd8ff;
`;

export const ButtonActive = styled.button`
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
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3px;
  background-color: #5cd3a8;
`;
