import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header";
import { Calendar } from "./components/calendarComponents/Calendar";
import { ContextWrapper } from "./context/ContextWrapper";
// import Footer from "./components/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Header />
    <ContextWrapper>
      <Calendar />
    </ContextWrapper>
    {/* <Footer /> */}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
