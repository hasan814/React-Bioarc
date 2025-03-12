import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <span className="text-xl font-medium">bioarc</span>
        <img src="/idKTMvM6AE_logos.svg" alt="Logo" className="w-8 h-6" />
      </div>
    </Link>
  );
};

export default Logo;
