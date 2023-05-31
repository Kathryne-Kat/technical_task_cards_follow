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

function UserCard({ user, changeFollow }) {
  const { id, tweets, followers, avatar, isFollow } = user;
  return (
    <Card key={id}>
      <Logo src={logo} alt="logo" width="76px" />
      <AvatarBorder>
        <Avatar src={avatar} alt="avatar" width="62px" />
      </AvatarBorder>
      <Tweets>{tweets} tweets</Tweets>
      <Follow>
        {(followers / 1000).toFixed(3).replace('.', ',')} followers
      </Follow>
      {isFollow ? (
        <Button
          type="button"
          onClick={() => changeFollow(id)}
          isFollow={isFollow}
        >
          Following
        </Button>
      ) : (
        <ButtonActive
          type="button"
          onClick={() => changeFollow(id)}
          isFollow={isFollow}
        >
          Follow
        </ButtonActive>
      )}
    </Card>
  );
}

export default UserCard;
