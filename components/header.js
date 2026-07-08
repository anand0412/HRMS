const header = `
<header class="top-header">

    <div class="header-left">

        <button id="menuToggle" class="icon-btn">
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="page-title">

            <h2>Dashboard</h2>

            <span>Home / Dashboard</span>

        </div>

    </div>

    <div class="header-center">

        <div class="search-box">

            <i class="fa-solid fa-magnifying-glass"></i>

            <input
            type="text"
            placeholder="Search employees, departments, payroll...">

        </div>

    </div>

    <div class="header-right">

        <button class="icon-btn">

            <i class="fa-regular fa-bell"></i>

        </button>

        <button class="icon-btn">

            <i class="fa-regular fa-envelope"></i>

        </button>

        <button class="icon-btn">

            <i class="fa-regular fa-moon"></i>

        </button>

        <div class="profile">

            <div class="profile-image">

                A

            </div>

            <div class="profile-info">

                <strong>Administrator</strong>

                <small>System Administrator</small>

            </div>

            <i class="fa-solid fa-chevron-down"></i>

        </div>

    </div>

</header>
`;

document.getElementById("header").innerHTML = header;