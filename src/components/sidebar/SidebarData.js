import {
  Building,
  Calendar,
  Euro,
  Files,
  Folders,
  LayoutDashboard,
  MessageSquare,
  MessageSquarePlus,
  Settings,
  Timer,
  Users,
} from "lucide-react";
import routeNames from "../../routenames";

export const SuperAdminSiderbarData = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    link: routeNames.superAdmin.dashboard,
  },
  {
    label: "NGOs",
    icon: Building,
    links: [
      {
        label: "Add NGO",
        link: routeNames.superAdmin.addNgo,
      },
      {
        label: "View NGOs",
        link: routeNames.superAdmin.viewNgo,
      },
      {
        label: "Add Branch",
        link: routeNames.superAdmin.addBranch,
      },
      {
        label: "View Branches",
        link: routeNames.superAdmin.viewBranches,
      },
    ],
  },
  {
    label: "Users",
    icon: Users,
    links: [
      {
        label: "Add User Category",
        link: routeNames.superAdmin.addUserType,
      },
      {
        label: "View User Categories",
        link: routeNames.superAdmin.viewUserType,
      },
      {
        label: "Add User",
        link: routeNames.superAdmin.addUser,
      },
      {
        label: "View Users",
        link: routeNames.superAdmin.viewUser,
      },
      {
        label: "Add User Verification",
        link: routeNames.superAdmin.addUserVerification,
      },
      {
        label: "Verfication Schedule",
        link: routeNames.superAdmin.verificationSchedule,
      },
    ],
  },
  {
    label: "Roaster",
    icon: Timer,
    links: [
      {
        label: "Add Roaster",
        link: routeNames.superAdmin.addRoaster,
      },
      {
        label: "View Roaster",
        link: routeNames.superAdmin.viewRoasters,
      },
    ],
  },
  {
    label: "Projects",
    icon: Folders,
    links: [
      {
        label: "Add Project",
        link: routeNames.superAdmin.addProject,
      },
      {
        label: "View Projects",
        link: routeNames.superAdmin.viewProject,
      },
    ],
  },
  {
    label: "Schedule",
    icon: Calendar,
    link: routeNames.superAdmin.schedule,
  },
  {
    label: "UXO Connect",
    icon: Calendar,
    link: routeNames.superAdmin.connect,
  },
  {
    label: "Appointments",
    icon: Calendar,
    links: [
      {
        label: "Add Appointment",
        link: routeNames.superAdmin.addAppoinment,
      },
      {
        label: "View Appointments",
        link: routeNames.superAdmin.viewAppoinments,
      },
    ],
  },

  {
    label: "Documents",
    icon: Files,
    links: [
      {
        label: "Add Document",
        link: routeNames.superAdmin.addDocument,
      },
      {
        label: "View Documents",
        link: routeNames.superAdmin.viewDocuments,
      },
    ],
  },

  {
    label: "Chats",
    icon: MessageSquare,
    link: routeNames.superAdmin.chats,
  },
  {
    label: "Payments",
    icon: Euro,
    link: routeNames.superAdmin.viewPayments,
  },
  {
    label: "Complaints & Reviews",
    icon: MessageSquarePlus,
    links: [
      {
        label: "Complaints",
        link: routeNames.superAdmin.complaints,
      },
      {
        label: "Reviews",
        link: routeNames.superAdmin.reviews,
      },
    ],
  },
  {
    label: "Settings",
    icon: Settings,
    link: routeNames.superAdmin.settings,
  },
];
