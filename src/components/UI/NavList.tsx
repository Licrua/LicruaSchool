import navItems from '@/data/navList';
import { useAppSelector } from '@/store/store';

function NavList() {
  const orderLenght = Object.values(
    useAppSelector((state) => state.order.orders)
  );
  return (
    <>
      {navItems.map((item, index) => (
        <li
          className={index === 1 ? `bg-blue-300/50 p-1 rounded-2xl` : undefined}
          key={item.id}
        >
          {index === 0 && (
            <div className="indicator">
              <span className="indicator-item badge badge-neutral rounded-b-full mt-4 ml-2  top-0 left-0 z-10">
                {orderLenght.length}
              </span>
            </div>
          )}
          {index === 1 && (
            <div className="indicator">
              <span className="indicator-item badge badge-neutral border-1 border-yellow-50  bg-red-300/50 rounded-2xl animate-pulse mt-4 ml-2 -top-12  left-5 z-10">
                New
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
