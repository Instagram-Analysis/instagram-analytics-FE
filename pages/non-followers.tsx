import { useEffect } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import FollowerList from "../components/FollowerList";
import useInstagramData from "../hooks/useInstagramData";

export default function NonFollowersPage() {
  const { nonFollowers, getNonFollowers } = useInstagramData();

  useEffect(() => {
    getNonFollowers();
  }, [getNonFollowers]);

  if (nonFollowers.loading) return <Loader />;
  if (nonFollowers.error) return <div>Error: {nonFollowers.error}</div>;

  return (
    <Layout>
      <h1>Who Doesn’t Follow Me Back</h1>
      <FollowerList followers={nonFollowers.data} />
    </Layout>
  );
}
