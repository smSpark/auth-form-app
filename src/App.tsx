import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { ProtectedRoute } from "./HoC/ProtectedRoute";
import { AppContainer } from "./styles/CommonStyles";
import { SideWindows } from "./pages/SideWindows/SideWindows";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";

const App: React.FC = () => {
  return (
    <AppContainer>
      <HeaderMenu />
      <Switch>
        <Route exact path="/login" component={AuthPage} />
        <ProtectedRoute exact path="/userlist" component={UsersPage} />
        <Redirect from="*" to="/userlist" />
      </Switch>
      <SideWindows />
    </AppContainer>
  );
};

export { App };
