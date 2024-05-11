import Search from "./search";
import Authbutton from "./authbutton";

const Topnav = ({ setterm }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900  w-full z-20 p-5 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex w-full justify-center ">
          <Search setterm={setterm} />
          <div className="bg-blue-900 text-white rounded-md p-3">
            <Authbutton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
