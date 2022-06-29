import './sidebar.scss';
import { useContext, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import { LightModeContext } from '../../context/lightModeContext';
import LogoutModal from '../modal/LogoutModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modalRedux';

const Sidebar = () => {
  const [active, setActive] = useState('1');
  const dispatchContext = useContext(LightModeContext).dispatch;
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleToggleActive = (event) => {
    setActive(event.target.id);
  };

  return (
    <>
      {isOpen && <LogoutModal />}
      <div className="sidebar">
        <div className="wrapper">
          <div className="menu">
            <h3 className="title">Main</h3>
            <ul className="list">
              <Link to="/" className="link">
                <li
                  className={active === '1' ? 'item active' : 'item'}
                  id={'1'}
                  onClick={handleToggleActive}
                >
                  <DashboardIcon className="sidebarIcon" />
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">Sales</h3>
            <ul className="list">
              <li
                className={active === '2' ? 'item active' : 'item'}
                id={'2'}
                onClick={handleToggleActive}
              >
                <TimelineOutlinedIcon className="sidebarIcon" />
                Analytics
              </li>
              <li
                className={active === '3' ? 'item active' : 'item'}
                id={'3'}
                onClick={handleToggleActive}
              >
                <AttachMoneyOutlinedIcon className="sidebarIcon" />
                Transactions
              </li>
              <li
                className={active === '4' ? 'item active' : 'item'}
                id={'4'}
                onClick={handleToggleActive}
              >
                <BarChartIcon className="sidebarIcon" />
                Stats
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">List</h3>
            <ul className="list">
              <Link to="/users" className="link">
                <li
                  className={active === '5' ? 'item active' : 'item'}
                  id={'5'}
                  onClick={handleToggleActive}
                >
                  <GroupIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li
                  className={active === '6' ? 'item active' : 'item'}
                  id={'6'}
                  onClick={handleToggleActive}
                >
                  <StoreMallDirectoryIcon className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <li
                className={active === '7' ? 'item active' : 'item'}
                id={'7'}
                onClick={handleToggleActive}
              >
                <CreditCardOutlinedIcon className="sidebarIcon" />
                Orders
              </li>
              <li
                className={active === '8' ? 'item active' : 'item'}
                id={'8'}
                onClick={handleToggleActive}
              >
                <LocalShippingIcon className="sidebarIcon" />
                Delivery
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">Notifications</h3>
            <ul className="list">
              <li
                className={active === '9' ? 'item active' : 'item'}
                id={'9'}
                onClick={handleToggleActive}
              >
                <MailOutlinedIcon className="sidebarIcon" />
                Mail
              </li>
              <li
                className={active === '10' ? 'item active' : 'item'}
                id={'10'}
                onClick={handleToggleActive}
              >
                <DynamicFeedOutlinedIcon className="sidebarIcon" />
                Feedback
              </li>
              <li
                className={active === '11' ? 'item active' : 'item'}
                id={'11'}
                onClick={handleToggleActive}
              >
                <ChatBubbleOutlinedIcon className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">Staff</h3>
            <ul className="list">
              <li
                className={active === '12' ? 'item active' : 'item'}
                id={'12'}
                onClick={handleToggleActive}
              >
                <WorkOutlineOutlinedIcon className="sidebarIcon" />
                Manage
              </li>
              <li
                className={active === '13' ? 'item active' : 'item'}
                id={'13'}
                onClick={handleToggleActive}
              >
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">Service</h3>
            <ul className="list">
              <li
                className={active === '14' ? 'item active' : 'item'}
                id={'14'}
                onClick={handleToggleActive}
              >
                <SettingsSystemDaydreamOutlinedIcon className="sidebarIcon" />
                System Health
              </li>
              <li
                className={active === '15' ? 'item active' : 'item'}
                id={'15'}
                onClick={handleToggleActive}
              >
                <PsychologyOutlinedIcon className="sidebarIcon" />
                Logs
              </li>
              <li
                className={active === '16' ? 'item active' : 'item'}
                id={'16'}
                onClick={handleToggleActive}
              >
                <SettingsIcon className="sidebarIcon" />
                Settings
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">User</h3>
            <ul className="list">
              <li
                className={active === '17' ? 'item active' : 'item'}
                id={'17'}
                onClick={handleToggleActive}
              >
                <AccountCircleOutlinedIcon className="sidebarIcon" />
                Profile
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span className="bottomTitle">Toogle Color:</span>
          <div
            className="colorOption"
            onClick={() => dispatchContext({ type: 'LIGHT' })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatchContext({ type: 'DARK' })}
          ></div>
          <div className="logout" onClick={() => dispatch(openModal())}>
            <ExitToAppOutlinedIcon className="sidebarIcon" />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
