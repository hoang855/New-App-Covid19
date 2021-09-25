import "./LineTransfers.css";

const LineTransfers = ({ getsummary }) => {
  return (
    <div className="LineTransfers-container">
      <h2>Live Cases by Country</h2>

      <div className="LineTransfers-sreo">
        <table className="LineTransfers-sreo-table">
          <tbody>
            {getsummary.map((item, index) => {
              const { Slug, TotalConfirmed } = item;
              return (
                <tr key={index}>
                  <td>{Slug}</td>
                  <td>{TotalConfirmed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LineTransfers;
