import { HashRouter, Route } from "react-router-dom";
import HomeDirection from "../HOC/HomeDirection";

import ConfigPage from "../page/ConfigPage";
import EditePage from "../page/EditePage";
import SettingPage from "../page/SettingPage";

const AppRouter = () => (
  <HashRouter basename="/nailApp">
    <Route path="/wellcome" component={ConfigPage} />
    <Route path="/edite/:id" component={EditePage} />
    <Route path="/setting" component={SettingPage} />
    <HomeDirection />
  </HashRouter>
);

export default AppRouter;
