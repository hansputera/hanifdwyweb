import { render } from "solid-js/web";

import App from "./App";
import "virtual:windi.css";
import { Router } from "solid-app-router";
import routes from "./routes";

render(<Router routes={routes}><App /></Router>, document.getElementById("root"));
