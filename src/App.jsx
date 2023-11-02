import { useState } from "react";
import "./App.css";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value
  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };
  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    const sliced = array.slice(1, 4);
    setResult(sliced.join(", "));
  };

  const handleSplice = function () {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = function () {
    const indexing = array.indexOf(query);
    setResult(indexing);
  };

  const handleIncludes = function () {
    const including = array.includes(query);
    setResult(including.toString()); //toString()을 해줘야 결과물 화면에 나타남
  };

  const handleFind = function () {
    const finding = array.find((item) => item.includes(query));
    // console.log(finding);
    // console.log(array.includes(query));
    // initialState.forEach((item) => {
    //   const founded = item

    //   if(founded.includes(query) === true) {
    //     setResult(finding);
    //   } else {
    //     setResult("Not Found");
    //   }
    // })           If문으로 시도해보려고 했는데 못했습니다...
    setResult(finding || "Not Found");
  };

  const handleSome = function () {
    const somming = array.some((item) => item.includes(query));
    setResult(somming.toString());
  };

  const handleEvery = function () {
    const Everyy = array.every((item) => item.length > 2);
    setResult(Everyy.toString());
  };

  //내림차순으로 만들어봤습니다..!!!
  // const handleSort = function () {
  //   const sorted = array.sort(function (a, b) {
  //     const target1 = a.toLowerCase();
  //     const target2 = b.toLowerCase();
  //     if (target1 < target2) {
  //       return 1;
  //     }
  //     if (target1 > target2) {
  //       return -1;
  //     }
  //     if (target1 === target2) {
  //       return 0;
  //     }
  //   });
  //   setArray(sorted);
  //   setResult(sorted.join(", "));
  // }

  const handleSort = () => {
    const sorted = [...array].sort();
    setArray(sorted);
    setResult(sorted.join(", "));
  };

  const handleJoin = () => {
    const joined = array.join(", ");
    setResult(joined);
  };

  return (
    <div>
      <h1 className="mains">Standard반 배열 API 테스트</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="영단어를 입력하세요"
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>

      <div className="btns">
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div
        style={{
          border: "1px solid blue",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h3 className="origin">원본배열</h3>
        <p className="contents">{array.join(", ")}</p>
      </div>
      <div
        style={{
          border: "1px solid blue",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h3 className="resultsCont">결과물</h3>
        <p className="results">{result}</p>
      </div>
    </div>
  );
}
export default App;
