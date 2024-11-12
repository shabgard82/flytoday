import FlyCard from "./Components/FlyCard";
import FlyCardList from "./Components/FlyCardList";
import NewFlycard from "./Components/NewFlyCard";

export default function Home() {
  return (
    <div className="mt-10 px-2">
      <FlyCardList />
      {/* <NewFlycard /> */}
    </div>
  );
}
