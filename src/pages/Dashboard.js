//hooks
import { useState, useEffect } from 'react';
//components
import Passenger from '../components/Passenger';
import { useAuth } from '../context/AuthProvider';

const Dashboard = () => {
  const [userData, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=35`
      );
      const newdata = await response.json();
      setData((prevPosts) => [...prevPosts, ...newdata?.data]);
      setPage(page + 1);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <div className="grid grid-cols-5 text-2xl font-bold  mx-20">
            <h1>Passenger Name</h1>
            <h1>Trips</h1>
            <h1>Airline Name</h1>
            <h1>Airline Head Quater</h1>
            <h1>Country</h1>
          </div>
          {userData?.map((item, index) => (
            <Passenger key={item.id} {...item} />
          ))}
        </>
      ) : (
        <div className="text-lg font-bold mt-8 text-center mx-auto">
          <h2>Login or Sign up first</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
