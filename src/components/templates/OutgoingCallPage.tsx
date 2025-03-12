import PatientAppointments from "../modules/main/OutgoingCalls/PatientAppointments";
import AdditionalActions from "../modules/main/OutgoingCalls/AdditionaActions";
import InsuranceDetails from "../modules/main/OutgoingCalls/InsuranceDetails";
import AppointmentInfo from "../modules/main/OutgoingCalls/AppointmentInfo";
import PatientDetails from "../modules/main/OutgoingCalls/PatientDetails";
import CallInfo from "../modules/main/OutgoingCalls/CallInfo";

const OutgoingCallPage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 min-h-screen w-4/5">
      <AppointmentInfo />
      <div className="flex flex-col md:flex-row gap-4">
        <CallInfo />
        <div className="flex flex-col gap-4 w-full md:w-3/5">
          <PatientDetails />
          <InsuranceDetails />
          <AdditionalActions />
        </div>
      </div>
      <PatientAppointments />
    </div>
  );
};

export default OutgoingCallPage;
