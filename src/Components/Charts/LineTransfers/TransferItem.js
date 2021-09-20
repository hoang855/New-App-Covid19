const TransferItem = ({ type, smb, title  }) => {
  return (
    <tr className={type}>
      <td>{smb}</td>
      <td>{title}</td>
    </tr>
  );
};

export default TransferItem;
