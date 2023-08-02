import { Route, Routes, Outlet } from "react-router-dom";

import Home from "./HomePage/HomePage";
import Header from "../components/Header";
import SP500 from "./SP500/SP500";

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
        <Route path={`/sp500`} exact element={<SP500 />} />
      </Route>
    </Routes>
  );
};

export default Customer;
