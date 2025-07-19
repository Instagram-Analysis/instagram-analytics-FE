import { useEffect } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import FollowerList from "../components/FollowerList";
import useInstagramData from "../hooks/useInstagramData";

export default function FollowingPage() {
  const { following, getFollowing } = useInstagramData();

  useEffect(() => {
    getFollowing();
  }, [getFollowing]);

  if (following.loading) return <Loader />;
  if (following.error) return <div>Error: {following.error}</div>;

  return (
    <Layout>
      <h1>Who I Follow</h1>
      <FollowerList followers={following.data} />
    </Layout>
  );
}
