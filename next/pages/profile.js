import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import { fetcher } from '../lib/api';
import { getIdFromLocalCookie, getTokenFromServerCookie } from '../lib/auth';
import { useFetchUser } from '../lib/authContext';

const Profile = ({ avatar }) => {
  // Fetch the user and loading state from the authContext
  const { user, loading } = useFetchUser();
  const [image, setImage] = useState(null);
  const router = useRouter();

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const tmpImage = event.target.files[0];
      setImage(tmpImage);
    }
  };

  const uploadToServer = async () => {
    const formData = new FormData();
    const file = image;
    formData.append('inputFile', file);
    formData.append('user_id', await getIdFromLocalCookie());

    try {
      const responseData = await fetcher('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (responseData.message === 'success') {
        router.reload('/profile');
      }
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  return (
    <Layout user={user}>
      <>
        <h1 className="text-5xl font-bold">
          Welcome {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {user}
          </span>
          <span>👋</span>
        </h1>
        {/* Additional profile content goes here */}
      </>
    </Layout>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);

  if (!jwt) {
    return {
      redirect: {
        destination: '/',
      },
    };
  } else {
    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const avatar = responseData.avatar ? responseData.avatar : 'default_avatar';

    return {
      props: {
        avatar,
      },
    };
  }
}
