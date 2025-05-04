import navItems from '@/data/navList';

function NavList() {
  return (
    <>
      {navItems.map((item, index) => (
        <li key={item.id}>
          {index === 0 && (
            <div className="indicator">
              <span className="indicator-item badge badge-neutral rounded-b-full mt-4 ml-2  top-0 left-0 z-10">
                0
              </span>
            </div>
          )}
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </>
  );
}

export default NavList;
