import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./context/AuthContext";

import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Forgot from "./forgot/Forgot";
import Medical from "./medical-dream/Medical";
import BoxSet from "./box-set/Box-Set";
import BoxSetHero from "./box-set/Box-Set-Hero";
import AccountHero from "./account/Account-Hero";
import PersonalSetting from "./account/Personal-Setting";
import YourOrder from "./account/Your-Order";
import Certificates from "./account/Certificates";
import Address from "./account/Address";
import ChangePassword from "./account/ChangePassword";
import BestSellers from "./best-sellers/Best-Sellers";
import FictionBooks from "./fiction-books/Fiction-Books";
import AwardWinners from "./award-winners/Award-Winners";
import Authors from "./author/authors";
import NewArrivals from "./arrivals/New-Arrivals";
import TodaysDeal from "./todays-deal/Todays-Deal";
import RequestBook from "./request-book/Request-Book";
import BookDetails from "./components/Book-Details";
import SliderNext from "./home/Slider-Next";
import QuickView from "./components/Quick-View";
import InternationalBestseller from "./international-bestseller/international-seller";
import TopBooks from "./home/Top-Books";
import TopBooksPage from "./top-books/Top-Books-Page";
import TopBooksBase from "./top-books/Top-Books-Base";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import FileBase from "./common-file/file-base";
import CheckoutPage from "./pages/CheckoutPage";
import SearchResults from "./components/SearchResults";
import AboutUS from "./components/AboutUS";
import Career from "./components/Career";
import Blog from "./components/Blog";
import CopyrightPolicy from "./components/CopyrightPolicy";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import SecureShopping from "./components/SecureShopping";
import FAQ from "./components/FAQ";

const routes = [
  // Public Routes
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot", element: <Forgot /> },

  // Protected Routes - Book Browsing
  { path: "/newarrivals", element: <NewArrivals />, protected: true },
  { path: "/medical", element: <Medical />, protected: true },
  { path: "/boxset", element: <BoxSet />, protected: true },
  { path: "/boxhero", element: <BoxSetHero />, protected: true },
  { path: "/bestSeller", element: <BestSellers />, protected: true },
  { path: "/fictionBooks", element: <FictionBooks />, protected: true },
  { path: "/awardWinners", element: <AwardWinners />, protected: true },
  { path: "/authors", element: <Authors />, protected: true },
  { path: "/todaysDeal", element: <TodaysDeal />, protected: true },
  {
    path: "/InternationalBestseller",
    element: <InternationalBestseller />,
    protected: true,
  },

  // Protected Routes - User Account
  { path: "/account", element: <AccountHero />, protected: true },
  { path: "/personalsetting", element: <PersonalSetting />, protected: true },
  { path: "/yourorder", element: <YourOrder />, protected: true },
  { path: "/certificates", element: <Certificates />, protected: true },
  { path: "/address", element: <Address />, protected: true },
  { path: "/changepassword", element: <ChangePassword />, protected: true },

  // Protected Routes - Book Details
  { path: "/bookDetails", element: <BookDetails />, protected: true },
  { path: "/SliderNext", element: <SliderNext />, protected: true },
  { path: "/requestBook", element: <RequestBook />, protected: true },
  { path: "/topBooksBase", element: <TopBooksBase />, protected: true },
  { path: "/quickview/:id", element: <QuickView />, protected: true },
  { path: "/cart", element: <CartPage />, protected: true },
  { path: "/wishlist", element: <WishlistPage />, protected: true },
  { path: "/filebase", element: <FileBase />, protected: true },
  {
    path: "/checkout",
    element: <CheckoutPage />,
    protected: true,
  },
  {
    path: "/search-results",
    element: <SearchResults />,
    protected: true,
  },
  { path: "/AboutUS", element: <AboutUS />, protected: true },
  { path: "/Career", element: <Career />, protected: true },
  { path: "/Blog", element: <Blog />, protected: true },
  { path: "/CopyrightPolicy", element: <CopyrightPolicy />, protected: true },
  { path: "/ContactUs", element: <ContactUs />, protected: true },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy />, protected: true },
  { path: "/TermsOfUse", element: <TermsOfUse />, protected: true },
  { path: "/SecureShopping", element: <SecureShopping />, protected: true },
  { path: "/CopyrightPolicy", element: <CopyrightPolicy />, protected: true },
  { path: "/FAQ", element: <FAQ />, protected: true },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element, protected: isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                isProtected ? (
                  <ProtectedRoute>{element}</ProtectedRoute>
                ) : (
                  element
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
