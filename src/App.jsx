import Palette from "./components/Palette";
import Chart from "./components/Chart";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-marionBerry font-poppins">
        <div className="min-h-screen flex justify-center items-center ">
          <div>
            <h1 className="text-center font-bold text-xl lg:text-4xl text-white pb-5">
              Expense Chart
            </h1>
            <div className="bg-white rounded-3xl lg:h-[500px] lg:w-[500px]">
              <h1 className="text-center font-semibold text-xl lg:text-2xl py-5">
                Expenses
              </h1>
              <Chart />

              <Palette />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
