import { useState } from "react";
import contents from "./Data/contents";


function Contest() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="contest">
      {contents.map((contest, index) => (
        <button onClick={contentChange} value={index}>
          {contest.tab}
        </button>
      ))}
      {contents[index].content}
    </div>
  );
}

export default Contest;
