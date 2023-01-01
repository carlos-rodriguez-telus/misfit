function Menu() {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Misfit
              </a>
                <div className="navbar-nav">
                  <a className="nav-link" href="#">Dashboard</a>
                  <a className="nav-link" href="#">Accounts</a>
                  <a className="nav-link" href="#">Transactions</a>
                  <a className="nav-link" href="#">Transfers</a>
                  <a className="nav-link" href="#">History</a>
                  <button className="btn btn-danger">Exit</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Menu;
