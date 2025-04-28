export const HeaderNavBurger = () => {
  return (
    <div className="navbar">
      <div className="dropdown dropdown-left ">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{' '}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-left menu-sm dropdown-content bg-amber-500/50  rounded-box z-1 mt-3  p-2 shadow"
        >
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
