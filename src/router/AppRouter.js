import { BrowserRouter, Route } from "react-router-dom";
import HomeDirection from "../HOC/HomeDirection";

import ConfigPage from "../page/ConfigPage";
import EditePage from "../page/EditePage";
import SettingPage from "../page/SettingPage";

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/wellcome" component={ConfigPage} />
    <Route path="/edite/:id" component={EditePage} />
    <Route path="/setting" component={SettingPage} />
    <HomeDirection />
  </BrowserRouter>
);

export default AppRouter;
