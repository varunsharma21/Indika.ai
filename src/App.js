import "./App.css";
import { useContext } from "react";
import { context } from "./store/DataProvider";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const ctx = useContext(context);
  console.log(ctx.data);

  return (
    <div className="App">
      <Header />
      <Dashboard />
      {ctx.data.map((user) => {
        return user.messages.map((messageInfo, idx) => (
          <p key={idx}>{messageInfo.message}</p>
        ));
      })}
    </div>
  );
}

export default App;
