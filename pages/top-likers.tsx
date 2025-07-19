import { useEffect } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import LikesChart from "../components/LikesChart";
import useInstagramData from "../hooks/useInstagramData";

export default function TopLikersPage() {
  const { topLikers, getTopLikers } = useInstagramData();

  useEffect(() => {
    getTopLikers();
  }, [getTopLikers]);

  if (topLikers.loading) return <Loader />;
  if (topLikers.error) return <div>Error: {topLikers.error}</div>;

  return (
    <Layout>
      <h1>Who Likes My Posts the Most</h1>
      <LikesChart likers={topLikers.data} />
    </Layout>
  );
}
