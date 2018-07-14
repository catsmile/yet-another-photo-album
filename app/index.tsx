import * as React from "react";
import * as ReactDOM from "react-dom";

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

import { Main } from './components/Main';

initializeIcons();

const App = () => (
  <Main />
);

ReactDOM.render(<App />, document.getElementById("root"));
