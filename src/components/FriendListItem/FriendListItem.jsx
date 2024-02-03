import './FriendListItem.styled.css';

export const FriendListItem = ({ friend }) => {
  const { id, isOnline, avatar, name } = friend;
  return (
    <li className="item" key={id}>
      <span
        className="status"
        style={{ background: isOnline ? '#4FAE52' : '#FD5251' }}
      ></span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};
