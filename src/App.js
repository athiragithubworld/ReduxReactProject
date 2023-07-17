import { Fragment } from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthentication);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
