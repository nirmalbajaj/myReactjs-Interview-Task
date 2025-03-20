import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../redux/imageSlice';

function UploadModal({ open, onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.images.user);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const file = data.image[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(uploadImage({
        id: Date.now(),
        src: reader.result,
        user: user.username,
      }));
      reset();
      onClose();
    };
    reader.readAsDataURL(file);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4">Upload Image</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input 
            type="file" 
            accept="image/*" 
            {...register('image', { required: true })}
            className="w-full"
          />
          <button 
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;