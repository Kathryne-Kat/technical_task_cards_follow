import UserCard from 'components/UserCard/UserCard';
import React from 'react';
import users from '../../users.json';
import { useEffect, useState } from 'react';
import { Wrap } from './CardList.styled';

function CardsList() {
  const [usersAll, setUsersAll] = useState(
    () => JSON.parse(localStorage.getItem('usersList')) ?? users
  );

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(usersAll));
  }, [usersAll]);

  const changeFollow = id => {
    setUsersAll(usersAll =>
      usersAll.map(user => {
        if (user.id === id) {
          return {
            ...user,
            isFollow: user.isFollow ? false : true,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
          };
        }
        return user;
      })
    );
  };
  return (
    <Wrap>
      {usersAll.map(user => {
        return (
          <UserCard user={user} key={user.id} changeFollow={changeFollow} />
        );
      })}
    </Wrap>
  );
}

export default CardsList;
