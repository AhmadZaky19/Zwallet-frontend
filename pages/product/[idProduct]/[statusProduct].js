import React from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";
import { useRouter } from "next/router";

export default function Profile(props) {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <Layout title="Product Detail Banget">
      <Navbar />
      <h1>Page Detail Product Banget</h1>
    </Layout>
  );
}
