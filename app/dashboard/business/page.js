"use client";
import React from "react";

import ClubStats from "../../components/clubStats";
import DealsMintedChart from "../../components/dealsMintedChart";
import RecentRedemptions from "../../components/recentRedemptions";

function BusinessDashboard() {



  return (
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
      <div className="col-md-8">
        <h1 className="h2">Club Dashboard</h1>
        <p>Oversee your club’s performance: track activity and monitor progress seamlessly.</p>
        </div>
        <div className="col-md-3 text-end">
          {/* <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button> */}
          {/* <button className="btn btn-kmint-blue mx-2">
                Edit Club Info
              </button> */}
        </div>
      </div>
      <hr/>
      <ClubStats />
      <div className="row mt-4">
        <div className="col-md-12">
              <DealsMintedChart />
            </div>
      </div>
      <div className="row mt-4">
        {/* <div className="col-md-12">
              <RecentRedemptions />
            </div> */}
      </div>

    </main>
  );
}

export default BusinessDashboard;
