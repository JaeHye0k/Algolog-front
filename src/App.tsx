import "./styles/App.style.css";
import Routing from "./routes/Routing.tsx";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default App;
