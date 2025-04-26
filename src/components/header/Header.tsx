import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { HeaderNavDekstop } from './HeaderNavDekstop';
import { HeaderNavBurger } from './HeaderNavBurger';
import NavButton from '../UI/NavButton';

export const Header = () => {
  return (
    <header className="flex items-center justify-between   px-[20px] sm:px-[50px]   text-white  font-medium leading-[100%]">
      <Image
        priority
        src={'/images/logo.svg'}
        alt="logo"
        width={146}
        height={15}
      />
      <div className="mg:hidden order-3 ">
        <HeaderNavBurger />
      </div>
      <div className="hidden mg:block">
        <HeaderNavDekstop />
      </div>
      <div className="flex   gap-[30px]">
        <SignedOut>
          <SignInButton>
            <NavButton name={'account'} image={'user'} />
            {/* <button className="flex gap-[7px]">
              <img src="/images/user.svg" alt="account" />
              <span className="hidden mg:inline-block">Account</span>
            </button> */}
          </SignInButton>
          <SignInButton>
            <NavButton name={'cart'} image={'cart'} />
            {/* <button className="flex gap-[7px]">
              <img src="/images/cart.svg" alt="cart" />
              <span className="hidden  mg:inline-block">Cart</span>
            </button> */}
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <NavButton name={'cart'} image={'Cart'} />
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
