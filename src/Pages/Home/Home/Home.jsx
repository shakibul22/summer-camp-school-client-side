import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularMenu from '../PopularMenu/PopularMenu';
import Statistics from '../Statistics/Statistics';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // CSS-in-JS styles for the spinner and its container
 
  const spinnerStyle = css`
    display: block;
  `;

  useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="homepage">
      {isLoading ? (
        <div className="spinner-container flex justify-center align-middle ">
          <ClipLoader className="loading loading-spinner text-info" css={spinnerStyle} size={35}  loading={isLoading} />
          <ClipLoader className="loading loading-spinner text-warning" css={spinnerStyle} size={35}  loading={isLoading} />
          <ClipLoader className="loading loading-spinner text-error" css={spinnerStyle} size={35}  loading={isLoading} />
        

        </div>
      ) : (
        <>
          <Banner />
          <PopularMenu />
          <PopularInstructor />
          <Statistics />
        </>
      )}
    </div>
  );
};

export default Home;
