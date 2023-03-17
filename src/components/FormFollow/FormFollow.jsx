import React, { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarBorder,
  Button,
  Follow,
  ImgSvg,
  Logo,
  Section,
  Tweets,
} from './FormFollow.styled';
import avatar from '../../img/Hansel.svg';
import logo from '../../img/Logo.svg';
import imgSvg from '../../img/picture2_1.svg';

function FormFollow(props) {
  let n = 100500;
  let btn = 'follow';
  const [follow, setFollow] = useState(
    () => JSON.parse(localStorage.getItem('follow')) ?? n
  ); // 500 - prevState

  useEffect(() => {
    if (setFollow !== follow) {
      localStorage.setItem('follow', JSON.stringify(follow));
    }
  }, [follow]);

  const onHandleClick = () => {
    setFollow(prevState => {
      // return prevState + 1;
      if (prevState === n) {
        return prevState + 1;
      }
      if (prevState === n + 1) {
        return prevState - 1;
      }
    });
    console.log(follow);
  };
  if (follow > n) {
    btn = 'following';
  } else if (follow === n) {
    btn = 'follow';
  }
  let str = String(follow);
  console.log(str.slice(0, 3) + ',' + str.slice(3, 6));
  console.log();
  //{String(follow.slice(0, 3) + ',' + follow.slice(3, 6))}
  return (
    <Section>
      <Logo src={logo} alt="" />
      <ImgSvg src={imgSvg} alt="" />
      <AvatarBorder>
        <Avatar src={avatar} alt="" />
      </AvatarBorder>
      <Tweets>777 tweets</Tweets>
      <Follow>{str.slice(0, 3) + ',' + str.slice(3, 6)} followers</Follow>
      <Button
        style={{ backgroundColor: follow === n ? '#ebd8ff' : '#5CD3A8' }}
        type="button"
        onClick={onHandleClick}
      >
        {btn}
      </Button>
    </Section>
  );
}

export default FormFollow;
