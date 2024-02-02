import './FriendList.styled.css';

const FriendList = ({ friends }) => {
  const online = { backgroundColor: '#4FAE52' };
  const offline = { backgroundColor: '#FD5251' };
  return (
    <div className="friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="item" key={friend.id}>
            <span
              className="status"
              style={friend.isOnline ? online : offline}
            ></span>
            <img
              className="friend-avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
