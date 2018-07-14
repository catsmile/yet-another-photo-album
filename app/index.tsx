import * as React from "react";
import { render } from "react-dom";

import "./app.css";

import { Navigation } from "./components/Navigation";
import { CoreExample } from "./components/CoreExample";
import { SelectExample } from './components/SelectExample';

const App = () => (
  <div>
    <Navigation />
    <CoreExample />
    <SelectExample />
  </div>
);

render(<App />, document.getElementById("root"));
