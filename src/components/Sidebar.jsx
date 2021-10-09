import '../styles/components/Sidebar.scss';

const Sidebar = ({ statusSidebar, closeSidebar }) => {
  return (
    <div className="sidenav" style={{ width: statusSidebar ? 200 : 0 }}>
      <span className="sidenav-closeBtn" onClick={closeSidebar}>
        X
      </span>
      <nav className="sidenavBox">
        <span>HOME</span>
        <span>HEADPHONES</span>
        <span>SPEAKERS</span>
        <span>EARPHONES</span>
      </nav>
    </div>
  );
};

export default Sidebar;
