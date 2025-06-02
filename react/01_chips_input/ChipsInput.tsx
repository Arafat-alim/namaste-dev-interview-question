import { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [inputText, setInputText] = useState("");

  //! fetching chips from local storage
  //   useEffect(() => {
  //     const savedChips = localStorage.getItem("chips");
  //     if (savedChips) {
  //       setChips(JSON.parse(savedChips));
  //     }
  //   }, []);

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addChip = () => {
    const trimmedChip = inputText.trim();

    if (trimmedChip && !chips.includes(trimmedChip)) {
      setChips([...chips, trimmedChip]);
      //   localStorage.setItem("chips", JSON.stringify([...chips, trimmedChip]));
      setInputText("");
    }
  };

  const handleRemoveChip = (removingChip) => {
    setChips(chips.filter((chip) => chip !== removingChip));
    // localStorage.setItem(
    //   "chips",
    //   JSON.stringify(chips.filter((chip) => chip !== removingChip))
    // );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText) {
      e.preventDefault();
      addChip();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={handleInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
      />
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        {chips?.map((chip, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              backgroundColor: "red",
              padding: "6px 12px",
              borderRadius: "40px",
              gap: "10px",
            }}
          >
            {chip}
            <button onClick={() => handleRemoveChip(chip)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
