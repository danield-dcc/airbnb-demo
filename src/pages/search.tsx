import { useRouter } from "next/router";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { format } from "date-fns";
import InfoCard from "./components/InfoCard";

interface SearchProps {
  searchResults: {
    img: string;
    location: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: number;
    lat: number;
    title: string;
  }[];
}

function Search({ searchResults }: SearchProps) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGests } = router.query;

  //@ts-ignore
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  //@ts-ignore
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">
            300+ Stays -{range}- {noOfGests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((searchResult) => (
              <InfoCard
                key={searchResult.img}
                img={searchResult.img}
                location={searchResult.location}
                description={searchResult.description}
                star={searchResult.star}
                price={searchResult.price}
                total={searchResult.total}
                long={searchResult.long}
                lat={searchResult.lat}
                title={searchResult.title}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/H8RS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
