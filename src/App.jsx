import "./App.css";
import { Calendar } from "./components/Calendar";
import { Now } from "./models/Now";

function App() {
  const now = new Now(new Date());
  return <Calendar date={now.date} />;
}

export default App;
