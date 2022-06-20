import './user.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { Link } from 'react-router-dom';

const User = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="user">
      <div className="titleContainer">
        <h1 className="title">Edit User</h1>
        <Link to="/newUser">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="show">
          <div className="showTop">
            <img
              className="userImg"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="topTitle">
              <span className="name">Anna Becker</span>
              <span className="title">Software Engineer</span>
            </div>
          </div>
          <div className="showBottom">
            <span className="showTitle">Account Details</span>
            <div className="showInfo">
              <PermIdentityIcon className="showIcon" />
              <span className="infoTitle">annabeck99</span>
            </div>
            <div className="showInfo">
              <CalendarTodayIcon className="showIcon" />
              <span className="infoTitle">12.03 1993</span>
            </div>
            <span className="showTitle">Contact Details</span>
            <div className="showInfo">
              <PhoneAndroidIcon className="showIcon" />
              <span className="infoTitle">+1 123 456 67</span>
            </div>
            <div className="showInfo">
              <MailOutlinedIcon className="showIcon" />
              <span className="infoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="showInfo">
              <LocationSearchingOutlinedIcon className="showIcon" />
              <span className="infoTitle">Linden New Jersey | USA</span>
            </div>
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
                  placeholder="annabeck99"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Anna Becker"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label htmlFor="birth">Date of Birth</label>
                <input
                  type="text"
                  id="birth"
                  placeholder="12.03 1993"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+1 123 456 67"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="annabeck99@gmail.com"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Linden New Jersey | USA"
                  className="updateInput"
                />
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="updateImg"
                />
                <label htmlFor="file">
                  <PublishOutlinedIcon className="uploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="updateBtn" onSubmit={handleSubmit}>
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
