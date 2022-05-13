import "./Sidebar.css";

const Sidebar = ({ show }) => {
  return (
    <>
      <div
        className={
          show
            ? "side-width side-active border-end pt-5 mt-3 pe-2"
            : "side-width side-inactive"
        }
      >
        <ul className="nav navbar-nav">
          <li className="list my-1 px-3 py-2 mt-4" role="button">
            <h4>Dashboard</h4>
          </li>
          <li className="list my-1 px-3 py-1" role="button">
            <a
              href="https://google.com"
              className="text-decoration-none text-dark"
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
