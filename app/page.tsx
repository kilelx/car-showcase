import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

// Get all the params from the URL directly
export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    // Get the value from params, or a default one
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // console.log(allCars);

  return (
    <main
      className="overflow-hidden"
    >
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
              options={fuels}
            />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars?.map((car, index) => <CarCard car={car} key={index} />)
              }
            </div>
          </section>
        ) : (
          <div className="home-error__container">
            <h2 className="text-black text-xl font-bold">Oops, no result...</h2>
            <p>{allCars?.error}</p>
          </div>
        )}

      </div>
    </main>
  );
}
