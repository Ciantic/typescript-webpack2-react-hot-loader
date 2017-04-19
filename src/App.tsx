import * as React from "react";
import { TestComponent } from "./TestComponent";
require("./App.scss");

export const App = () => <div>
    Try edit this text in src/App.tsx, it should hot reload
    <TestComponent />
</div>;