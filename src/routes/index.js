import About from "../components/Client/About/About";
import Contact from "../components/Client/Contact/Contact";
import Home from "../components/Client/Home/Home";
import News from "../components/Client/News/News";
import Promotion from "../components/Client/Promotion/Promotion";
import Videos from "../components/Client/Videos/Videos";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";
import Collection from "../components/Client/Collection/Collection";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: AdminLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: DefaultLayout,
  },
  {
    path: "/about",
    component: About,
    Layout: ClientLayout,
  },
  {
    path: "/lien-he",
    component: Contact,
    Layout: ClientLayout,
  },
  {
    path: "/videos",
    component: Videos,
    Layout: ClientLayout,
  },
  {
    path: "/tin-tuc",
    component: News,
    Layout: ClientLayout,
  },
  {
    path: "/khuyen-mai",
    component: Promotion,
    Layout: ClientLayout,
  },
  {
    path: "/collections/:id",
    component: Collection,
    Layout: ClientLayout,
  },
];
