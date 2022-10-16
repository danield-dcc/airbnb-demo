import Head from "next/head";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LargeCard from "./components/LargeCard";
import MediumCard from "./components/MediumCard";
import SmallCard from "./components/SmallCard";

interface HomeProps {
  exploreData: {
    location: string;
    img: string;
    distance: string;
  }[];
  cardsData: {
    img: string;
    title: string;
  }[];
}

export default function Home({ exploreData, cardsData }: HomeProps) {
  return (
    <div className="">
      <Head>
        <title>AirBnB App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* get data from server */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                distance={item.distance}
                img={item.img}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* atributo scrollbar-hide foi retirado */}
          <div className="flex space-x-3 overflow-scroll  p-3 -ml-3">
            {cardsData?.map((card) => (
              <MediumCard key={card.img} img={card.img} title={card.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  //tive que criar uma novo "repositorio" no jsonkeeper, com o json original e seus links
  const exploreData = await fetch("https://www.jsonkeeper.com/b/ACNO").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/4V8K").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
