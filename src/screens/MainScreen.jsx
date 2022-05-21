import Button from "@mui/material/Button";
import AppBar from "../components/AppBar";
import { counterAtom, counterSelector } from "../providers/CounterRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { Add, Remove } from "@mui/icons-material";

function MainScreen() {
  const [counter, setCounter] = useRecoilState(counterAtom);
  function plusCounter() {
    setCounter(counter < 10 ? counter + 1 : counter);
  }
  function minusCounter() {
    setCounter(counter > 0 ? counter - 1 : counter);
  }

  return (
    <div className="main-screen">
      <AppBar />
      <div className="flex flex-col items-center mt-3 h-5/6 content-center justify-center">
        <p className="mb-12 font-bold text-2xl">{useRecoilValue(counterSelector)}</p>
        <div className="flex w-6/12 justify-evenly">
          <Button onClick={plusCounter} variant="contained">
            <Add />
          </Button>
          <Button onClick={minusCounter}>
            <Remove />
          </Button>
        </div>
        <p className="absolute bottom-0 mb-6">Technologys used : Nodejs, React, Recoil State Manager, Material UI Framework, Tailwind CSS</p>
      </div>
    </div>
  );
}

export default MainScreen;
