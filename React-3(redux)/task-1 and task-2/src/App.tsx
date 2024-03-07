import Card from "./components/Card";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Card />
      </Provider>
    </div>
  );
}
