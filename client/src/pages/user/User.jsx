import './user.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const user = useSelector((state) =>
    state.client.users.find((user) => user._id === userId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="user">
      <div className="titleContainer">
        <h1 className="title">Add New User</h1>
        <Link to="/newUser">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="show">
          <div className="showTop">
            <img className="userImg" src={user.img} alt="" />
            <div className="topTitle">
              <span className="name">{user.username}</span>
            </div>
          </div>
          <div className="showBottom">
            <span className="showTitle">Account Details</span>
            <div className="showInfo">
              <PermIdentityIcon className="showIcon" />
              <span className="infoTitle">{user.username}</span>
            </div>
            <span className="showTitle">Contact Details</span>
            {/* <div className="showInfo">
              <PhoneAndroidIcon className="showIcon" />
              <span className="infoTitle">+1 123 456 67</span>
            </div> */}
            <div className="showInfo">
              <MailOutlinedIcon className="showIcon" />
              <span className="infoTitle">{user.email}</span>
            </div>
            {/* <div className="showInfo">
              <LocationSearchingOutlinedIcon className="showIcon" />
              <span className="infoTitle">Linden New Jersey | USA</span>
            </div> */}
          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Edit</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder={user.username}
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder={user.username}
                  className="updateInput"
                />
              </div>
              {/* <div className="updateItem">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+1 123 456 67"
                  className="updateInput"
                />
              </div> */}
              <div className="updateItem">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder={user.email}
                  className="updateInput"
                />
              </div>
              {/* <div className="updateItem">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Linden New Jersey | USA"
                  className="updateInput"
                />
              </div> */}
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src={user.img} alt="" className="updateImg" />
                <label htmlFor="file">
                  <PublishOutlinedIcon className="uploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button
                disabled={!admin}
                className={`updateBtn ${admin ? '' : 'disabled'} `}
                onSubmit={handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
