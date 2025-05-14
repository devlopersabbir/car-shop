import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { ICar, fetchCars } from "@/utils";

export default async function Home() {
  const allCars: ICar[] = await fetchCars();
  const isEmpty = !Array.isArray(allCars) || allCars.length < 0 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="hero__text-container">
          <h1 className="font-extrabold text-4xl">Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" />
          </div>
        </div>
        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars &&
                allCars.map((item: ICar, index: number) => (
                  <CarCard key={index} car={item} />
                ))}
            </div>
          </section>
        ) : (
          <div>
            <h1>no data found!</h1>
          </div>
        )}
      </div>
    </main>
  );
}
