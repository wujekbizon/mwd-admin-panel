import './widgetSm.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import { Link } from 'react-router-dom';

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('users/?new=true');
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <h3 className="title">New Join Members</h3>
      <ul className="list">
        {users
          .filter((user) => user.username !== 'admin')
          .map((user) => (
            <li className="listItem" key={user._id}>
              <img
                src={
                  user.img ||
                  'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
                }
                alt=""
                className="img"
              />
              <div className="user">
                <span className="userName">{user.username}</span>
                <span className="userTitle">Software Engineer</span>
              </div>
              <Link className="link" to={`/user/${user._id}`}>
                <button className="button">
                  <VisibilityOutlinedIcon className="icon" />
                  Display
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
