import React from 'react';

//hooks
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
//icon
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="fixed w-full px-10 bg-black py-4 justify-between text-white flex flex-row gap-2 items-center">
      {!user ? (
        <>
          <Link to="/">
            <div>Logo</div>
          </Link>
          <div className="flex gap-2">
            <Link to="/signup">
              <button className="cursor-pointer px-4 py-2  font-semibold bg-blue-800 text-white  rounded-xl">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="cursor-pointer font-semibold px-4 py-2 bg-white text-black  rounded-xl">
                Login
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/">Dashboard</Link>
          </div>
          <div className="flex gap-2">
            <button
              className="cursor-pointer items-center px-4 py-2 bg-white text-black  rounded-xl"
              onClick={signOut}
            >
              Log out
            </button>
            <div>
              <FaUserAlt size={30} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
