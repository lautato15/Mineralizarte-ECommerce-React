import "./HeadBoard.css";
function HeadBoard({ BG, Text }) {
  return (
    <>
      <div className={"w-100 BgHeadBoard  "}>
        <p
          className="FontGaramond text-black text-center fw-bold fs-1"
          style={{ padding: "85px 0 85px" }}
        >
          <span className="BadgeHeadBoard">{Text}</span>
        </p>
      </div>
    </>
  );
}

export default HeadBoard;
