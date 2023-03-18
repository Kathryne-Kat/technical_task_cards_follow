import React, { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarBorder,
  Button,
  ButtonActive,
  Card,
  Follow,
  Logo,
  Tweets,
} from './UserCard.styled';
import logo from '../../img/Logo.svg';

function UserCard({ user }) {
  const { id, tweets, followers, avatar } = user;

  const [allFollow, setAllFollow] = useState(
    JSON.parse(localStorage.getItem(id)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(allFollow));
  }, [allFollow, id]);

  const handleClick = () => {
    setAllFollow(prevState => {
      if (prevState === followers) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <Card key={id}>
      <Logo src={logo} alt="" />
      <AvatarBorder>
        <Avatar src={avatar} alt="" />
      </AvatarBorder>
      <Tweets>{tweets} tweets</Tweets>
      <Follow>
        {(allFollow / 1000).toFixed(3).replace('.', ',')} followers
      </Follow>

      {allFollow === followers ? (
        <Button type="button" onClick={handleClick}>
          follow
        </Button>
      ) : (
        <ButtonActive type="button" onClick={handleClick}>
          following
        </ButtonActive>
      )}
    </Card>
  );
}

export default UserCard;
