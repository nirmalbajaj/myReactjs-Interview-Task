import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/imageSlice';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

function LoginModal({ open, onClose }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (data.username !== validUsername || data.password !== validPassword) {
      setError('username', { type: 'manual', message: 'Invalid username or password' });
      setError('password', { type: 'manual', message: 'Invalid username or password' });
      return;
    }

    dispatch(login(data));
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4 text-black">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('username')}
              placeholder="Username"
              className="w-full p-2 border rounded text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              style={{ color: 'black', backgroundColor: '#f3f4f6' }} // Inline style for extra assurance
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          <div>
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              style={{ color: 'black', backgroundColor: '#f3f4f6' }} // Inline style for extra assurance
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;