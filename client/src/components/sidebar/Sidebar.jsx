import './sidebar.scss';
import { useState } from 'react';
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState('1');

  const handleToggleActive = (event) => {
    setActive(event.target.id);
  };

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="menu">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
            <Link to="/" className="link">
              <li
                className={active === '1' ? 'item active' : 'item'}
                id={'1'}
                onClick={handleToggleActive}
              >
                <LineStyleOutlinedIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
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
              <TrendingUpOutlinedIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Quick Menu</h3>
          <ul className="list">
            <Link to="/users" className="link">
              <li
                className={active === '4' ? 'item active' : 'item'}
                id={'4'}
                onClick={handleToggleActive}
              >
                <PersonOutlineOutlinedIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={active === '5' ? 'item active' : 'item'}
                id={'5'}
                onClick={handleToggleActive}
              >
                <CategoryOutlinedIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li
              className={active === '6' ? 'item active' : 'item'}
              id={'6'}
              onClick={handleToggleActive}
            >
              <AttachMoneyOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li
              className={active === '7' ? 'item active' : 'item'}
              id={'7'}
              onClick={handleToggleActive}
            >
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Notifications</h3>
          <ul className="list">
            <li
              className={active === '8' ? 'item active' : 'item'}
              id={'8'}
              onClick={handleToggleActive}
            >
              <MailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li
              className={active === '9' ? 'item active' : 'item'}
              id={'9'}
              onClick={handleToggleActive}
            >
              <DynamicFeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li
              className={active === '10' ? 'item active' : 'item'}
              id={'10'}
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
              className={active === '11' ? 'item active' : 'item'}
              id={'11'}
              onClick={handleToggleActive}
            >
              <WorkOutlineOutlinedIcon className="sidebarIcon" />
              Manage
            </li>
            <li
              className={active === '12' ? 'item active' : 'item'}
              id={'12'}
              onClick={handleToggleActive}
            >
              <TimelineOutlinedIcon className="sidebarIcon" />
              Analytics
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
      </div>
    </div>
  );
};

export default Sidebar;
