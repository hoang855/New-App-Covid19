import "./Highlight.css";

const HighItem = ({ title, type, colorclss, count }) => {
  return (
    <div className="Highlight-body">
      <div className={`Highlight-body-color ${type}`}></div>
      <h1>{title}</h1>
      <h3 className={colorclss}>{count}</h3>
      
    </div>
  );
};

export default HighItem;
