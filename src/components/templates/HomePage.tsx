import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-sans w-4/5">
      <section className="bg-blue-100 h-screen flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
          بهترین خدمات درمانی برای شما
        </h2>
        <p className="text-gray-700 max-w-lg">
          بیمارستان سلامت با بهترین پزشکان و تجهیزات، در خدمت شماست.
        </p>
        <Link
          to="/outgoing-calls"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          دریافت مشاوره رایگان
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
