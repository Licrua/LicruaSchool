import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import Image from 'next/image';
import { HeaderNavDekstop } from './HeaderNavDekstop';
import { HeaderNavBurger } from './HeaderNavBurger';
import NavButton from '../UI/NavButton';
import { useAppSelector } from '@/store/store';
import Skeleton from 'react-loading-skeleton';

export const Header = () => {
  const { user } = useUser();
  const subs = useAppSelector((state) => state.subscription.subscriptions);
  const subPlan = subs[0]?.type;
  console.log('subPlan', subPlan);

  return (
    <header className="flex items-center container justify-between   px-[20px]    text-white  font-medium leading-[100%]">
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
      <div className="flex gap-[30px]">
        <SignedOut>
          <SignInButton>
            <NavButton name={'account'} image={'user'} />
          </SignInButton>
          {user && (
            <SignInButton>
              <NavButton name={'cart'} image={'cart'} />
            </SignInButton>
          )}
        </SignedOut>
        <SignedIn>
          <NavButton name={'cart'} image={'cart'} />
          {subPlan ? (
            <div className="flex mb-8 flex-col items-center gap-1.5">
              <p className="text-center border-2 border-amber-300 p-1 bg-amber-200/70">
                {subPlan}
              </p>
              <UserButton />
            </div>
          ) : (
            <Skeleton width={60} height={50} />
          )}
        </SignedIn>
      </div>
    </header>
  );
};
