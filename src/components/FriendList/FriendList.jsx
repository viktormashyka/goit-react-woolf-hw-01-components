import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import './FriendList.styled.css';

const FriendList = ({ friends }) => {
  return (
    <div className="friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem friend={friend} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
