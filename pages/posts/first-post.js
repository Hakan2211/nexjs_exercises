import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/Sahara2.png"
        height={400}
        width={600}
        alt="Hakan in Marocco Deserts"
      />
    </Layout>
  );
};
export default FirstPost;
