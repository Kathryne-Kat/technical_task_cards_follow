import UserCard from 'components/UserCard/UserCard';
import React from 'react';
import users from '../../users.json';
import { Wrap } from './CardList.styled';

function CardsList() {
  return (
    <Wrap>
      {users.map(user => {
        return <UserCard user={user} key={user.id} />;
      })}
    </Wrap>
  );
}

export default CardsList;
