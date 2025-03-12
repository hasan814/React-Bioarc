import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const NotFoundPage = () => {
  // =========== Navigate =============
  const navigate = useNavigate();

  // =========== Navigate Function =============
  const goBack = () => navigate("/");

  // =========== Rendering =============
  return (
    <div className="w-4/5 flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <div className="space-x-4">
          <Button
            variant="outline"
            onClick={goBack}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded"
          >
            Go to Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-red-600 border border-red-600 hover:bg-red-100 rounded"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
