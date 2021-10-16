import { useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { fetchStart } from "./actions/action";
import ListItem from "./components/ListItems";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
  return (
    <div className="App">
      <ListItem />
    </div>
  );
}
