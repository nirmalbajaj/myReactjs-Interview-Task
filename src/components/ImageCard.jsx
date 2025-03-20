import { useDispatch, useSelector } from 'react-redux';
import { likeImage } from '../redux/imageSlice';

function ImageCard({ image }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.images.user);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image.src} alt="" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-600">Uploaded by: {image.user}</p>
        <p className="text-sm text-gray-600">Likes: {image.likes}</p>
        <p className="text-sm text-gray-600">
          Uploaded: {new Date(image.uploadTime).toLocaleString()}
        </p>
        {user && (
          <button
            onClick={() => dispatch(likeImage(image.id))}
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Like
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageCard;