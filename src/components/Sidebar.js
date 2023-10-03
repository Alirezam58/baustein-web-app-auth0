import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';
import {
  BsChevronLeft,
  BsPeople,
  BsPuzzle,
  BsBarChartLine,
  BsBag,
} from 'react-icons/bs';
import {
  BiSolidUser,
  BiRightArrow,
  BiCalendar,
  BiMapAlt,
  BiBookmark,
  BiTable,
  BiHome,
} from 'react-icons/bi';
import Logosmall from '../assets/logo-small.png';
import Munchenhbf from '../assets/Munich-hbf.jpg';
import SendligerTor from '../assets/sendliger-tor.jpg';
import Logout from './Logout';

const Sidebar = ({ children, userEmail }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    Array(2).fill(false)
  );

  const picLinkClass = isDropdownVisible ? 'pic-link' : 'pic-link collapsed';

  const toggleDropdown = (index) => {
    const newDropdownState = [...isDropdownVisible];
    newDropdownState[index] = !newDropdownState[index];
    setIsDropdownVisible(newDropdownState);
  };

  const dropdownData = [
    {
      name: 'München Hauptbahnhof',
      image: Munchenhbf,
    },
    {
      name: 'Sendlinger Tor',
      image: SendligerTor,
    },
  ];

  const menuItem = [
    {
      path: '/dashboard',
      name: 'GF Bereich',
      icon: <BsBag size="22" className="link-icon" />,
    },
    {
      path: '/projects',
      name: 'Mein Bereich',
      icon: <BiHome size="22" className="link-icon" />,
    },
  ];

  return (
    <div className="page-container">
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="top-section">
            <img src={Logosmall} />
            <BsChevronLeft className="arrow-icon" />
            <div className="logout">
              <Logout />
            </div>
          </div>
          <div className="mid-section">
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
                {item.icon}
                {item.name}
              </NavLink>
            ))}
            {dropdownData.map((item, index) => (
              <div
                className={
                  isDropdownVisible[index] ? 'pic-link' : 'pic-link collapsed'
                }
                key={index}
              >
                <div
                  className="pic-link-head"
                  onClick={() => toggleDropdown(index)}
                >
                  <img src={item.image} className="link-img" />
                  <p>{item.name}</p>
                </div>
                {isDropdownVisible[index] && (
                  <ul className="link-list">
                    <li>
                      <a>
                        <BiRightArrow size="22" className="link-icon" /> Start
                        Seite
                      </a>
                    </li>
                    <li>
                      <a>
                        <BiCalendar size="22" className="link-icon" /> Termine
                      </a>
                    </li>
                    <li>
                      <a>
                        <BiMapAlt size="22" className="link-icon" /> Lage Plan
                      </a>
                    </li>
                    <li>
                      <a>
                        <BiBookmark size="22" className="link-icon" />{' '}
                        Stammdaten
                      </a>
                    </li>
                    <li>
                      <a>
                        <BsPeople size="22" className="link-icon" />{' '}
                        Projektbeteilgitenliste
                      </a>
                    </li>
                    <li>
                      <a>
                        <BiTable size="22" className="link-icon" /> Organigram
                      </a>
                    </li>
                    <li>
                      <a>
                        <BsPuzzle size="22" className="link-icon" />{' '}
                        ProjektStukturplanung
                      </a>
                    </li>
                    <li>
                      <a>
                        <BsBarChartLine size="22" className="link-icon" />{' '}
                        Reporting
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="down-section">
            <BiSolidUser className="user-icon" />
            <p>{userEmail}</p>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
