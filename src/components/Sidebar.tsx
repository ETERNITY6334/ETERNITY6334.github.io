import React, { useState, useRef, useEffect, useCallback } from 'react';
import './styles/sidebar.css';
import SettingModal from './SettingModal';

import { Sling as Hamburger } from 'hamburger-react';
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline, IoCartOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import { RxTriangleRight } from "react-icons/rx";

interface SidebarContentProps {
  setSettingModalOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [SettingModalOpen, setSettingModalOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const sidebarIconsRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node) &&
        sidebarIconsRef.current &&
        !sidebarIconsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <aside>
      <div className='Top'>
        <div className='Hamburger' ref={hamburgerRef}>
          <Hamburger toggled={isOpen} toggle={toggleSidebar} />
        </div>
        <div className='sidebarIcons' ref={sidebarIconsRef}>
          <p><a href='#'><IoSettingsOutline onClick={() => { setSettingModalOpen(true); }} /></a></p>
          <p><a href='https://open.kakao.com/o/stQOvPtg'><PiPhoneCall /></a></p>
          <p><IoIosSearch /></p>
          <p><IoCartOutline /></p>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        {isOpen && <SidebarContent setSettingModalOpen={setSettingModalOpen} />}
      </div>
      <SettingModal
        isOpen={SettingModalOpen}
        onClose={() => { setSettingModalOpen(false) }} />
    </aside>
  );
};

const SidebarContent: React.FC<SidebarContentProps> = ({ setSettingModalOpen }) => {
  const handleSettingClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSettingModalOpen(true);
  };

  return (
    <div className='sidebarIndex'>
      <p onClick={handleSettingClick}><a href='#'>Setting<RxTriangleRight className='TriangleRight' /></a></p>
      <p><a href='https://open.kakao.com/o/stQOvPtg'>Call<RxTriangleRight className='TriangleRight' /></a></p>
      <p>Line3</p>
      <p>Line4</p>
      <p>Line5</p>
    </div>
  );
};

export default Sidebar;