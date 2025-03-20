import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/imageSlice';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import UploadModal from './UploadModal';

function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const user = useSelector(state => state.images.user);
  const dispatch = useDispatch();

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/recent" className="hover:text-blue-200">Recently Added</Link>
          <Link to="/top-rated" className="hover:text-blue-200">Top Rated</Link>
        </div>
        <div className="space-x-4">
          {user ? (
            <>
              <button 
                onClick={() => setUploadOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Upload
              </button>
              <button 
                onClick={() => dispatch(logout())}
                className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button 
              onClick={() => setLoginOpen(true)}
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <UploadModal open={uploadOpen} onClose={() => setUploadOpen(false)} />
    </nav>
  );
}

export default Navbar;