import "./LineTransfers.css";

const LineTransfers = ({ getsummary }) => {
  return (
    <div className="LineTransfers-container">
      <h2>Live Cases by Country</h2>

      <div className="LineTransfers-sreo">
        <table className="LineTransfers-sreo-table">
          {getsummary.map((item) => {
            const { Slug, TotalConfirmed } = item;
            return (
              <tr className="color-tr2">
                <td>{Slug}</td>
                <td>{TotalConfirmed}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default LineTransfers;
