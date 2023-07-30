import { Route, Routes, Outlet } from "react-router-dom";

import Home from "./HomePage/HomePage";
import Header from "../components/Header";

const Customer = () => {
  const PrivateOutlet = () => {
    return (
      <>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  };

  const WithoutHeaderFooter = () => {
    return <Outlet />;
  };

  return (
    <Routes>
      <Route path="/" element={<PrivateOutlet />}>
        <Route path={`/`} exact element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Customer;
