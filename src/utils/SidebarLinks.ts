import { LayoutDashboard, PhoneCall, CalendarPlus, ClipboardCheck, Users, Briefcase, History } from "lucide-react";

export const sidebarLinks = [
  { name: "داشبورد", icon: LayoutDashboard, href: "/dashboard" },
  { name: "تماس خروجی", icon: PhoneCall, href: "/outgoing-calls" },
  { name: "افزودن نوبت", icon: CalendarPlus, href: "/add-appointment" },
  { name: "وظایف", icon: ClipboardCheck, href: "/tasks" },
  { name: "بیماران", icon: Users, href: "/patients" },
  { name: "کارمندان", icon: Briefcase, href: "/staff" },
  { name: "تاریخچه تماس", icon: History, href: "/call-history" },
];
