import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo, useState } from "react";
import { appointments } from "@/utils/AppointmentLinks";

import AppointmentCard from "./AppointmentCard";
import TabContent from "./TabContent";

const PatientAppointments: React.FC = () => {
  // =============== State ===============
  const [selectedTab, setSelectedTab] = useState<string>("appointments");

  // =============== Memo ===============
  const appointmentList = useMemo(
    () =>
      appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      )),
    []
  );

  // =============== Rendering ===============
  return (
    <div className="w-full p-4 text-right">
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="flex ml-auto bg-transparent">
          {[
            { value: "info", label: "اطلاعات تکمیلی بیمار" },
            { value: "calls", label: "تاریخچه تماس‌های بیمار" },
            { value: "appointments", label: "تاریخچه نوبت‌های بیمار" },
          ].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={`px-4 py-2 text-gray-600 transition-all duration-300 ${
                selectedTab === value
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "hover:text-blue-500"
              }`}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabContent value="appointments">
          <div className="space-y-4">{appointmentList}</div>
        </TabContent>

        <TabContent value="calls">
          <p>اطلاعات تماس‌های بیمار نمایش داده خواهد شد.</p>
        </TabContent>

        <TabContent value="info">
          <p>اطلاعات تکمیلی بیمار در اینجا نمایش داده خواهد شد.</p>
        </TabContent>
      </Tabs>
    </div>
  );
};

export default PatientAppointments;
