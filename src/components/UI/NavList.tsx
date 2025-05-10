import navItems from '@/data/navList';
import { useAppSelector } from '@/store/store';

function NavList() {
	const orderLenght = Object.values(useAppSelector(state => state.order.orders))
  return (
    <>
      {navItems.map((item, index) => (
        <li key={item.id}>
          {index === 0 && (
            <div className="indicator">
              <span className="indicator-item badge badge-neutral rounded-b-full mt-4 ml-2  top-0 left-0 z-10">
                {orderLenght.length}
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
