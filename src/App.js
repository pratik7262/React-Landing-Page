import Features from "./components/features";
import Form from "./components/form";
import Help from "./components/help";
import Main from "./components/main";
import Navbar from "./components/navbar";
import WorkPage from "./components/workPage";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <Form />
      <WorkPage />
      <Help/>
    </div>
  );
}

export default App;
