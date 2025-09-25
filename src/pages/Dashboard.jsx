import React from 'react';

function Dashboard() {
  return (
    <div className="">
      <div className="content container-fluid">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card card-purple">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-1">
                    <i className="fas fa-users"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Active Users</div>
                    <div className="dash-counts">
                      <p>1025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card card-blue">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-1">
                    <i className="fa fa-exchange"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Total Transactions</div>
                    <div className="dash-counts">
                      <p>24,112</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card card-pink">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-1">
                    <i className="bi bi-ticket-detailed"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Featured Tokens</div>
                    <div className="dash-counts">
                      <p>6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card card-green">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-1">
                    <i className="bi bi-currency-dollar"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Donation</div>
                    <div className="dash-counts">
                      <p>$12.6K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Monthly Revenue</h5>
                </div>
              </div>
              <div className="card-body">
                <div id="sales_chart"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Donations by Charity</h5>
                </div>
              </div>
              <div className="card-body">
                <canvas id="donationChart" height="80"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;