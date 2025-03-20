import { useSelector } from 'react-redux';
import ImageCard from '../components/ImageCard';

function Home() {
  const images = useSelector(state => state.images.images);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">All Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default Home;