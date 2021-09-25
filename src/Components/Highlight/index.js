import HighItem from "./HighItem";

const Highlight = ({ report }) => {
  const data = report && report.length ? report[report.length - 1] : [];

  const sammary = [
    {
      title: "Total cases",
      count: data.Confirmed,
      type: "color-1",
      colorclss: "Highlight-body-h3-1",
    },
    {
      title: "Recovered cases",
      count: data.Recovered,
      type: "color-2",
      colorclss: "Highlight-body-h3-2",
    },
    {
      title: "Death cases",
      count: data.Deaths,
      type: "color-3",
      colorclss: "Highlight-body-h3-3",
    },
  ];
  return (
    <div className="Highlight-container">
      {sammary.map((item, index) => (
        <HighItem
          key={index}
          title={item.title}
          count={item.count}
          type={item.type}
          colorclss={item.colorclss}
        />
      ))}
    </div>
  );
};

export default Highlight;
