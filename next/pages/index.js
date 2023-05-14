import Layout from '../components/Layout';
import { useFetchUser } from '../lib/authContext';

const Home = () => {
  // Fetch the user and loading state from the authContext
  const { user, loading } = useFetchUser();
  
  return (
    <Layout user={user}>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        Next +{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Strapi
        </span>
      </h1>
    </Layout>
  );
};

export default Home;
