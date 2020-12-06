import { render } from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import InitialComponent from "../src/components/InitialComponent";

render(<div>
	<Provider store={store}>
		<InitialComponent />
	</Provider>
	</div>,document.getElementById('app')
);