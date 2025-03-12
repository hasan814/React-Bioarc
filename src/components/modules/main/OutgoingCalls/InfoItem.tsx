import { InfoItemProps } from "@/types";

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="font-semibold text-gray-900">{label}</span>
    <span className="text-gray-700">{value}</span>
  </div>
);

export default InfoItem;
