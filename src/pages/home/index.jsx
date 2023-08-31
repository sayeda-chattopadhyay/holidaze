import Banner from "../../components/banner/Banner";
import Card from "../../components/cards/Card";
import SearchBar from "../../components/search/SearchBar";
import HostImage from "../../assets/images/become-host.jpg";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner />
        <h1>Find Your best destination</h1>
        <SearchBar />
        <Card />
        <section>
          <h2>Why must choose us</h2>
          <div>
            <div>icon</div>
            <div>
              <h3>Lot of Choices</h3>
              <p>Many choices of attractive vacation</p>
            </div>
          </div>
        </section>
        <section className="px-6 border-4 border-red-300">
          <div className="flex flex-col items-center md:flex-row justify-center md:space-x-12 px-10 gap-10">
            <div>
              <h3>Ready to transform spaces into memorable experiences?</h3>
              <p className="font-paragraph text-gray-500 max-w-md">
                Unlock a world of opportunities by becoming a Venue Manager! As
                a host, you will have the power to create unforgettable
                experiences and bring your unique spaces to life. Join our
                platform and take the first step towards showcasing your venue
                to a diverse and eager audience. Register now and let the
                journey of hosting begin!
              </p>
              <button>Register as a host</button>
            </div>
            <img
              src={HostImage}
              alt="picture is showing a person is standing infront of check-in reception desk."
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
