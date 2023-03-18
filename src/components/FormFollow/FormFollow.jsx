import React, { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarBorder,
  Button,
  Follow,
  Logo,
  Section,
  Tweets,
  Wrap,
} from './FormFollow.styled';
import avatar from '../../img/Hansel.svg';
import logo from '../../img/Logo.svg';

function FormFollow() {
  const initialValue = 100500;
  let btn = 'follow';
  const [follow, setFollow] = useState(
    () => JSON.parse(localStorage.getItem('follow')) ?? initialValue
  );

  useEffect(() => {
    if (setFollow !== follow) {
      localStorage.setItem('follow', JSON.stringify(follow));
    }
  }, [follow]);

  const onHandleClick = () => {
    setFollow(prevState => {
      if (prevState === initialValue) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });
  };
  if (follow > initialValue) {
    btn = 'following';
  } else if (follow === initialValue) {
    btn = 'follow';
  }

  const followLimited = (follow / 1000).toFixed(3).replace('.', ',');

  return (
    <Wrap>
      <Section>
        <Logo src={logo} alt="" />
        <AvatarBorder>
          <Avatar src={avatar} alt="" />
        </AvatarBorder>
        <Tweets>777 tweets</Tweets>
        <Follow>{followLimited} followers</Follow>
        <Button
          style={{
            backgroundColor: follow === initialValue ? '#ebd8ff' : '#5CD3A8',
          }}
          type="button"
          onClick={onHandleClick}
        >
          {btn}
        </Button>
      </Section>
    </Wrap>
  );
}

export default FormFollow;
