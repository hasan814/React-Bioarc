import { AppointmentCardProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <Card className="p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-left">
        {appointment.actions ? (
          <div className="flex flex-wrap gap-2">
            {appointment.actions.map((action, index) => (
              <Button
                key={index}
                className="border-blue-600 text-blue-500"
                variant={"outline"}
              >
                {action}
              </Button>
            ))}
          </div>
        ) : (
          <Button
            className={`px-4 py-2 ${
              appointment.status === "لغو شده"
                ? "bg-red-500"
                : appointment.status === "رزرو شده"
                ? "bg-brown-600"
                : "bg-green-500"
            } text-white`}
          >
            {appointment.status}
          </Button>
        )}
        <p className="text-gray-400 text-sm mt-2">{appointment.date}</p>
      </div>
      <div className="text-center md:text-right">
        <h3 className="font-bold">{appointment.doctor}</h3>
        <p className="text-gray-500">{appointment.specialty}</p>
      </div>
    </Card>
  );
};

export default AppointmentCard;
