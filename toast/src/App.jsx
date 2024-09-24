import "./App.css";
import { ToastShelf } from "./components/ToastShelf";
import { ToastProvider } from "./context/ToastContext";
import { AddToastSection } from "./components/AddToastSection";
function App() {
  return (
    <ToastProvider>
      <div className="container">
        <AddToastSection />
        <ToastShelf />
      </div>
    </ToastProvider>
  );
}

export default App;
