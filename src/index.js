import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import App from "./app";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
);
