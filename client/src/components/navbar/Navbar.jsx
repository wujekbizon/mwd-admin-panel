import './navbar.scss';
import logo from '../../assets/logo.png';
import avatar from '../../assets/man.png';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  const handleLogout = () => {
    localStorage.clear();
    logout(dispatch);
    navigate('/login');
  };

  return (
    <div className="topbar">
      <div className="topWrapper">
        <div className="topLeft">
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <span className="textLeft">ADMIN PANEL</span>
        </div>
        {!admin && (
          <span className="viewMode">View Mode Only For Show Purpose</span>
        )}
        <div className="topRight">
          <div className="topIconContainer">
            <Badge
              badgeContent={1}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'white',
                  backgroundColor: '#010409',
                },
              }}
            >
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <div className="topIconContainer">
            <Badge
              badgeContent={3}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'white',
                  backgroundColor: '#010409',
                },
              }}
            >
              <LanguageIcon />
            </Badge>
          </div>
          <div className="topIconContainer">
            <SettingsOutlinedIcon />
          </div>

          <img
            className="topAvatar"
            src={
              user.img ||
              'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
            }
            alt=""
          />

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
