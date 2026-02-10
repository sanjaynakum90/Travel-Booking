import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './routes/Layout';
import Home from './components/Ui/Home';
import TourList from './components/Pages/TourList';
import TourDetails from "./components/Pages/TourDetails";
import BookingForm from "./components/Pages/BookingForm";
import BookingDetails from "./components/Pages/BookingDetails";
import ErrorElement from "./components/Pages/ErrorElement";
import LoadingPage from "./components/Pages/LoadingPage";
import ProtectedRoute from "./Context/ProtectedRouts";
import About from "./components/Pages/About";
import Services from "./components/Pages/Service";
import Contact from "./components/Pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "services",
          element: <Services />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "tour",
          element: <TourList />
        },
        {
          path: "tour/:id",
          element: <TourDetails />
        },
        {
          path: "booking/:id",
          element: (
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          )
        },
        {
          path: "BookingDetails",
          element: (
            <ProtectedRoute>
              <BookingDetails />
            </ProtectedRoute>
          )
        },
        {
          path: "loading",
          element: <LoadingPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;