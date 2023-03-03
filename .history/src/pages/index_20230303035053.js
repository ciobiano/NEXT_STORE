import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";


export default function Home({products}) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
     
      {/*Header*/}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
      {/*Banner*/}
      <Banner/>
      <ProductFeed products={products} />
        
      </main>
      
    </div>
  );
}





// Get >>> https://fakestoreapi.com/products
