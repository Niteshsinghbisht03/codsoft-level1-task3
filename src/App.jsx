import { useState } from "react";
import React from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}
          className="text-[#fff] p-4 text-base bg-[#131a26] cursor-pointer ease-in hover:opacity-90"
        >
          {i}
        </button>
      );
    }

    return digits;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="bg-gray-200 flex min-h-screen items-center justify-center p-4 ">
      <div className="w-full max-w-sm bg-[#fff] rounded-3xl overflow-hidden shadow-md">
        <div className="p-4 text-right bg-[#131a26] text-white text-2xl font-light">
          {result ? (
            <span className="text-sm text-[#888]"> ({result})</span>
          ) : (
            ""
          )}
          {calc || "0"}
        </div>
        <div className="flex ">
          <button
            onClick={() => updateCalc("/")}
            className="text-[#fff] p-4 text-base cursor-pointer ease-in hover:opacity-90	flex-1 bg-[#d81e5b] font-bold"
          >
            /
          </button>
          <button
            onClick={() => updateCalc("*")}
            className="text-[#fff] p-4 text-base cursor-pointer ease-in hover:opacity-90	flex-1 bg-[#d81e5b] font-bold"
          >
            *
          </button>
          <button
            onClick={() => updateCalc("+")}
            className="text-[#fff] p-4 text-base cursor-pointer ease-in hover:opacity-90	flex-1 bg-[#d81e5b] font-bold"
          >
            +
          </button>
          <button
            onClick={() => updateCalc("-")}
            className="text-[#fff] text-base cursor-pointer ease-in hover:opacity-90	flex-1 bg-[#d81e5b] font-bold"
          >
            -
          </button>
          <button
            onClick={deleteLast}
            className="text-[#fff] text-base cursor-pointer ease-in hover:opacity-90	flex-1 bg-[#d81e5b] font-bold"
          >
            DEL
          </button>
        </div>
        <div className="grid grid-cols-3  ">
          {createDigits()}
          <button
            onClick={() => updateCalc("0")}
            className="text-[#fff] bg-[#131a26] p-4 text-base cursor-pointer ease-in hover:opacity-90	"
          >
            0
          </button>
          <button
            onClick={() => updateCalc(".")}
            className="text-[#fff] bg-[#131a26] p-4 text-base cursor-pointer ease-in hover:opacity-90	"
          >
            .
          </button>

          <button
            onClick={calculate}
            className="text-[#fff] bg-[#131a26]  p-4 text-base cursor-pointer ease-in hover:opacity-90	"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
