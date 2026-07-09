window.addEventListener("DOMContentLoaded",()=>{

    const sidebar=document.createElement("script");

    sidebar.src="components/sidebar.js";

    document.body.appendChild(sidebar);

    const header=document.createElement("script");

    header.src="components/header.js";

    document.body.appendChild(header);

    if(document.getElementById("dashboard")){

        const dashboard=document.createElement("script");

        dashboard.src="components/dashboard.js";

        document.body.appendChild(dashboard);

    }

});