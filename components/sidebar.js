const sidebar = `
<aside class="sidebar">

    <div class="sidebar-top">

        <div class="logo-box">

            <div class="logo">

                <i class="fa-solid fa-landmark"></i>

            </div>

            <div class="logo-text">

                <h2>ADA HRMS</h2>

                <p>Human Resource Management</p>

            </div>

        </div>

        <button id="collapseBtn">

            <i class="fa-solid fa-bars"></i>

        </button>

    </div>


    <div class="menu-search">

        <input
        type="text"
        placeholder="Search Menu..."
        id="menuSearch">

    </div>


    <div class="menu-title">

        MAIN MENU

    </div>


    <ul class="menu">

        <li class="active">

            <i class="fa-solid fa-gauge-high"></i>

            <span>Dashboard</span>

        </li>

        <li class="has-submenu">

            <i class="fa-solid fa-users"></i>

            <span>Employee</span>

            <i class="fa-solid fa-angle-right arrow"></i>

        </li>

        <li class="submenu">

            <a href="#">Employee List</a>

            <a href="#">Attendance</a>

            <a href="#">Employee PF</a>

            <a href="#">Loan Advance</a>

            <a href="#">Employee Arrears</a>

            <a href="#">Present Day</a>

        </li>

        <li class="has-submenu">

            <i class="fa-solid fa-wallet"></i>

            <span>Payroll</span>

            <i class="fa-solid fa-angle-right arrow"></i>

        </li>

        <li class="submenu">

            <a href="#">Paybill</a>

            <a href="#">Salary Processing</a>

        </li>

        <li class="has-submenu">

            <i class="fa-solid fa-chart-column"></i>

            <span>Reports</span>

            <i class="fa-solid fa-angle-right arrow"></i>

        </li>

        <li class="submenu">

            <a href="#">Salary Slip</a>

            <a href="#">Bank Advice</a>

            <a href="#">Monthly PF</a>

            <a href="#">Monthly Tax</a>

            <a href="#">DA Report</a>

            <a href="#">Annual Statement</a>

            <a href="#">GIS</a>

            <a href="#">Bonus</a>

            <a href="#">Pension</a>

            <a href="#">NPS</a>

        </li>

        <li class="has-submenu">

            <i class="fa-solid fa-database"></i>

            <span>Masters</span>

            <i class="fa-solid fa-angle-right arrow"></i>

        </li>

        <li class="submenu">

            <a href="#">Company</a>

            <a href="#">Department</a>

            <a href="#">Designation</a>

            <a href="#">City</a>

            <a href="#">Band Pay</a>

            <a href="#">Grade Pay</a>

            <a href="#">Level</a>

            <a href="#">Increment</a>

            <a href="#">Leave Type</a>

        </li>

        <li class="has-submenu">

            <i class="fa-solid fa-user-shield"></i>

            <span>Permission</span>

            <i class="fa-solid fa-angle-right arrow"></i>

        </li>

        <li class="submenu">

            <a href="#">Modules</a>

            <a href="#">Menus</a>

            <a href="#">Assignment</a>

        </li>

        <li>

            <i class="fa-solid fa-gear"></i>

            <span>Settings</span>

        </li>

    </ul>


    <div class="sidebar-footer">

        <div class="user-box">

            <div class="avatar">

                A

            </div>

            <div>

                <h4>Administrator</h4>

                <small>Super Admin</small>

            </div>

        </div>

        <div class="version">

            Version 2.0

        </div>

    </div>

</aside>
`;

document.getElementById("sidebar").innerHTML = sidebar;