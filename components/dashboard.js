const dashboard = `

<div class="container-fluid">

    <!-- Welcome -->

    <div class="welcome-section">

        <div>

            <h2>Good Morning 👋</h2>

            <p>

                Welcome back to <strong>HRMS Pro</strong>

            </p>

        </div>

        <button class="primary-btn">

            <i class="fa-solid fa-user-plus"></i>

            Add Employee

        </button>

    </div>


    <!-- KPI Cards -->

    <div class="row mt-4">

        <div class="col-xl-3 col-lg-6 mb-4">

            <div class="kpi-card">

                <div class="kpi-icon blue">

                    <i class="fa-solid fa-users"></i>

                </div>

                <div>

                    <span>Total Employees</span>

                    <h3>1248</h3>

                    <small>+12 This Month</small>

                </div>

            </div>

        </div>


        <div class="col-xl-3 col-lg-6 mb-4">

            <div class="kpi-card">

                <div class="kpi-icon green">

                    <i class="fa-solid fa-building"></i>

                </div>

                <div>

                    <span>Departments</span>

                    <h3>24</h3>

                    <small>2 New</small>

                </div>

            </div>

        </div>


        <div class="col-xl-3 col-lg-6 mb-4">

            <div class="kpi-card">

                <div class="kpi-icon orange">

                    <i class="fa-solid fa-calendar-check"></i>

                </div>

                <div>

                    <span>Attendance</span>

                    <h3>97%</h3>

                    <small>Excellent</small>

                </div>

            </div>

        </div>


        <div class="col-xl-3 col-lg-6 mb-4">

            <div class="kpi-card">

                <div class="kpi-icon red">

                    <i class="fa-solid fa-wallet"></i>

                </div>

                <div>

                    <span>Monthly Payroll</span>

                    <h3>₹2.45Cr</h3>

                    <small>Processed</small>

                </div>

            </div>

        </div>

    </div>



    <!-- Charts Row -->

    <div class="row">

        <div class="col-lg-8">

            <div class="dashboard-card">

                <div class="card-header-custom">

                    <h5>Payroll Trend</h5>

                </div>

                <canvas id="payrollChart" height="110"></canvas>

            </div>

        </div>


        <div class="col-lg-4">

            <div class="dashboard-card">

                <div class="card-header-custom">

                    <h5>Department Distribution</h5>

                </div>

                <canvas id="departmentChart"></canvas>

            </div>

        </div>

    </div>


</div>

`;

document.getElementById("dashboard").innerHTML = dashboard;