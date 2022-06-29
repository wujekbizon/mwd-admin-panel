import './navbar.scss';
import logo from '../../assets/logo.png';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LightModeContext } from '../../context/lightModeContext';

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const { dispatch } = useContext(LightModeContext);

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
            <LanguageIcon />
            English
          </div>
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
            <DarkModeOutlinedIcon
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>

          <img
            className="topAvatar"
            src={
              user.img ||
              'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
