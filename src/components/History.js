function History() {
  const availableFilters = [
    <option value="date">Date</option>,
    <option value="date">Category</option>,
    <option value="date">Bank Account</option>,
  ];

  return (
    <div>
        {/* Filter START */}
      <div className="form-wrapper">
        <h2>History Expenses/Income</h2>
        <div className="form-group">
          <label>Filter Type:</label>
          <select className="form-control">
            {availableFilters}
          </select>
        </div>
        <form style={{ marginTop: "10px" }}>
          <div className="form-group">
            <label>Secondary filter:</label>
            <select className="form-control">
              <option value="test"> test </option>
            </select>
          </div>
          <div className="form-group">
            <br />
            <button className="btn btn-info">Apply filter</button>
          </div>
        </form>
      </div>
      {/* Filter END */}
      {/* Table START */}
      <div style={{ marginTop: "20px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Bank</th>
              <th scope="col">Type</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2022/11/06</td>
              <td>BAC</td>
              <td>expense</td>
              <td>house</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2022/11/08</td>
              <td>BR</td>
              <td>income</td>
              <td>cash</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Table END */}
    </div>
  );
}

export default History;
