function Transfer() {
  const availableFilters = [
    <option value="date">Date</option>,
    <option value="date">Category</option>,
    <option value="date">Bank Account</option>,
  ];

  return (
    <div className="row">
      <h2>Money Transfer</h2>
      {/* Left */}
      <div className="col">
        <form className="form-wrapper">
            {/* Account Select */}
          <div className="form-group">
            <label>Select Account <span class="badge bg-danger">Origin</span></label>
            <select className="form-control" style={{marginTop:"5px"}}>
              <option value="1">BAC</option>
              <option value="2">Banrural</option>
            </select>
          </div>
          {/* Amount */}
          <div className="form-group" style={{ marginTop: "7px" }}>
            <label>Amount to transfer</label>
            <input className="form-control" type="number" />
          </div>          
          <br/>
          <button className="btn btn-info">Transfer Money</button>
        </form>
      </div>
      {/* Right */}
      <div className="col">
        <form className="form-wrapper">
            {/* Target Account */}
          <div className="form-group">
          <label>Select Account <span class="badge bg-success">Target</span></label>
            <select className="form-control" style={{marginTop:"5px"}}>
              <option value="1">BAC</option>
              <option value="2">Banrural</option>
            </select>
          </div>
          <div className="form-group" style={{ marginTop: "7px" }}>
            <label>Select Currency</label>
            <select className="form-control">
              <option value="1">USD -$-</option>
              <option value="2">QTZ -Q-</option>
              <option value="3">EUR -€-</option>
            </select>
          </div>                    
        </form>
      </div>
    </div>
  );
}

export default Transfer;
