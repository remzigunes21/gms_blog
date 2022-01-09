import Head from "next/head";
import { useEffect } from "react";
import { PostCard, PostWidget, Categories, Header } from "../components";
import { getPosts } from "../services";
import FeaturedPosts from "../sections/FeaturedPosts";

function Home({ posts }) {
  console.log("🚀 ~ file: index.js ~ line 7 ~ Home ~ posts", posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-start-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-start-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Home;
