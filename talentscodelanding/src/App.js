import { SocketProvider } from "./context/SocketContext";
import Landing from "./pages/Landing";
import "antd/dist/antd.css";

function App() {
  return (
    <SocketProvider>
      <Landing />
    </SocketProvider>
  );
}

export default App;
