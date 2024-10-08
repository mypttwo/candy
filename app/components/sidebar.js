'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {useAuth} from "@/lib/AuthContext";
// import { useRouter } from 'next/navigation';

function Sidebar() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  if(!isAuthenticated){
    return (<></>)
  }
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="col-md-3 col-lg-2 d-md-block mintdeals sidebar">
      <div className="position-sticky pt-3">
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon">&#9776;</span> {/* Added visible icon */}
        </button>
        <div className={`collapse ${isOpen ? 'show' : ''} d-md-block`} id="sidebarMenu">
          <ul className="nav flex-column">
            {/* <li className="nav-item">
              <Link className="nav-link" href="/dashboard/partner">
                <i className="fas fa-handshake-angle me-2"></i>
                Partner Dashboard
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/dashboard/business" className="nav-link">
                <i className="fas fa-table-columns me-2"></i>
                Club Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/deals" className="nav-link">
                <i className="fas fa-receipt me-2"></i>
                Manage Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/redemptions" className="nav-link">
                <i className="fas fa-qrcode me-2"></i>
                Redemptions
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/credit" className="nav-link">
                <i className="fas fa-credit-card me-2"></i>
                Access Credit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
