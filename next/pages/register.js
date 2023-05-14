import { useFetchUser } from '../lib/authContext';
import Layout from '../components/Layout';
import { default as RegisterComponent } from '../components/Register';

const Register = () => {
  // Fetch the user and loading state from the authContext
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      {/* Render the RegisterComponent */}
      <RegisterComponent />
    </Layout>
  );
};

export default Register;
