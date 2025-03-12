export interface IDropdownProps {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export interface InfoItemProps {
  label: string;
  value: string;
}

export interface Appointment {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  status?: string;
  actions?: string[];
}

export interface AppointmentCardProps {
  appointment: Appointment;
}
