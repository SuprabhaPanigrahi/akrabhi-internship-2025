import React, { useRef, useState, useEffect } from "react";

export function Dropdown() {
  const [selected, setSelected] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setShowOptions(false));

  const handleSelect = (value) => {
    setSelected(value);
    setShowOptions(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <form>
        <label style={{ marginBottom: "8px", display: "block" }}>
          Choose an option:
        </label>

        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => setShowOptions((prev) => !prev)}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              width: "200px",
              textAlign: "left",
              color:"black"
            }}
          >
            {selected || "Select..."}
          </button>

          {showOptions && (
            <div
              style={{
                position: "absolute",
                top: "38px",
                left: 0,
                width: "200px",
                border: "1px solid #ccc",
                backgroundColor: "black",
                zIndex: 1
              }}
            >
              {["Apple", "Banana", "Cherry"].map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelect(item)}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

