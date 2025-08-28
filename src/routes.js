// All imported icons
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SchoolIcon from "@mui/icons-material/School";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SubjectIcon from "@mui/icons-material/Subject";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BiotechIcon from "@mui/icons-material/Biotech";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BoyIcon from '@mui/icons-material/Boy';
import ArticleIcon from '@mui/icons-material/Article';
import FaceIcon from '@mui/icons-material/Face';
import NewspaperIcon from '@mui/icons-material/Newspaper';

// All imported components
import HomePage from "./pages/HomePage/HomePage";
import AboutSchool from "./pages/AboutUs/AboutSchool";
import PrincipalOffice from "./pages/AboutUs/PrincipalOffice";
import AcademicCalender from "./pages/Academic/AcademicCalender";
import AcademicOutcomes from "./pages/Academic/AcademicOutcomes";
import Course from "./pages/Academic/Course";
import HolidayList from "./pages/Academic/HolidayList";
import AddmissionProcess from "./pages/Addmission/AddmissionProcess";
import ApplyAddmission from "./pages/Addmission/ApplyAddmission";
import FeesStructure from "./pages/Addmission/FeesStructure";
import Sheet from "./pages/Addmission/Sheet";
import Faculty from "./pages/Faculty/Faculty";
import ICT from "./pages/Facilities/ICT";
import Infrastructure from "./pages/Facilities/Infrastructure";
import LaboratoriesAndInstruments from "./pages/Facilities/LaboratoriesAndInstruments";
import Library from "./pages/Facilities/Library";
import ContactUs from "./pages/ContactUs/ContactUs";
import Gallery from "./pages/Gallery/Gallery";
import StudnetTC from "./pages/Student/StudnetTC";
import Result from "./pages/Student/Result";
import RegisterStudent from "./pages/Student/RegisterStudent";
import News from "./pages/News/News";

const routes = [
  {
    path: "/",
    title: "Home",
    icon: <HomeIcon />,
    element: <HomePage />,
  },

  {
    title: "About Us",
    icon: <SupervisedUserCircleIcon />,
    children: [
      {
        path: "/about/school",
        title: "About School",
        icon: <SchoolIcon />,
        element: <AboutSchool />,
      },
      {
        path: "/about/principal",
        title: "Principal",
        icon: <SupervisorAccountIcon />,
        element: <PrincipalOffice />,
      },
    ],
  },
  {
    title: "Academic",
    icon: <ConfirmationNumberIcon />,
    children: [
      {
        path: "/academic/calender",
        title: "Academic Calender",
        icon: <CalendarMonthIcon />,
        element: <AcademicCalender />,
      },
      {
        path: "/academic/outcome",
        title: "Academic Outcome",
        icon: <CalendarMonthIcon />,
        element: <AcademicOutcomes />,
      },
      {
        path: "/course",
        title: "Course",
        icon: <SubjectIcon />,
        element: <Course />,
      },
      {
        path: "/academic/holiday",
        title: "Holiday List",
        icon: <HolidayVillageIcon />,
        element: <HolidayList />,
      },
    ],
  },
  {
    title: "Admission",
    icon: <HouseSidingIcon />,
    children: [
      {
        path: "/admission/apply",
        title: "Apply Admission",
        icon: <HouseSidingIcon />,
        element: <ApplyAddmission />,
      },
      {
        path: "/admission/process",
        title: "Admission Process",
        icon: <HouseSidingIcon />,
        element: <AddmissionProcess />,
      },
      {
        path: "/admission/fees",
        title: "Fees Structure",
        icon: <CurrencyRupeeIcon />,
        element: <FeesStructure />,
      },
      {
        path: "/seats",
        title: "Seats",
        icon: <EventSeatIcon />,
        element: <Sheet />,
      },
    ],
  },
  {
    path: "/faculty",
    title: "Faculty",
    icon: <Diversity1Icon />,
    element: <Faculty />,
  },

  {
    title: "Facilities",
    icon: <BroadcastOnHomeIcon />,
    children: [
      {
        path: "/facility/ICT",
        title: "ICT",
        icon: <DesignServicesIcon />,
        element: <ICT />,
      },
      {
        path: "/facility/infrastructure",
        title: "Infrastructure",
        icon: <MeetingRoomIcon />,
        element: <Infrastructure />,
      },
      {
        path: "/facility/labandinstrument",
        title: "Lab And Instruments",
        icon: <BiotechIcon />,
        element: <LaboratoriesAndInstruments />,
      },
      {
        path: "/facility/library",
        title: "Library",
        icon: <LibraryBooksIcon />,
        element: <Library />,
      },
    ],
  },
    {
    title: "Students",
    icon: <BoyIcon />,
    children: [
      {
        path: "/student/tc",
        title: "Transfer Certificates",
        icon: <ArticleIcon />,
        element: <StudnetTC />,
      },
      {
        path: "/student/result",
        title: "Result",
        icon: <ArticleIcon />,
        element: <Result />,
      },
      {
        path: "/student/registration",
        title: "Register Student",
        icon: <FaceIcon />,
        element: <RegisterStudent />,
      },
    ],
  },
  {
    path: "/gallery",
    title: "Gallery",
    icon: <CollectionsIcon />,
    element: <Gallery />,
  },
    {
    path: "/news",
    title: "NEWS",
    icon: <NewspaperIcon />,
    element: <News />
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    icon: <ContactPageIcon />,
    element: <ContactUs />,
  },
];

export default routes;
