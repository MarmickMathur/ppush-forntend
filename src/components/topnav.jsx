import Search from "./search";
import Authbutton from "./Login";

const Topnav = ({ ontagchange }) => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900  w-full z-20 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Search ontagchange={ontagchange} />
          <div className="bg-blue-900 text-white rounded-md p-3">
            <Authbutton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topnav;
