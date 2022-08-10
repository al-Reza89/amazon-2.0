import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt=""
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}

        <div className="hidden sm:flex items-center rounded-md h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md  focus:outline-none px-4 "
          />
          <SearchIcon className="h-12  p-4 " />
        </div>
      </div>
      <div>{/* bottom nav */}</div>
    </header>
  );
};

export default Header;
