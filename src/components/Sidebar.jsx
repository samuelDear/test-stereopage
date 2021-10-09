import '../styles/components/Sidebar.scss';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidenav">
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
