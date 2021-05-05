let Dashboard = {
    render: async () => {
        let view = /*html*/ `
		<div id="content">
                    <!-- Begin Page Content -->
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <div class="spacer"></div>
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <!-- Sidebar Toggle (Topbar) -->
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>
                            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>

                            <div class="d-sm-inline-block no-border">
                                <select class="browser-default custom-select  month-select no-border">
                                    <option class="indv-month" value="1">This Year</option>
                                    <option class="indv-month" value="2">2019</option>
                                    <option class="indv-month" value="3">2018</option>
                                    <option class="indv-month" value="4">2017</option>
                                    <option class="indv-month" value="5">2016</option>
                                    <option class="indv-month" value="6">2015</option>
                                    <option class="indv-month" value="7">July</option>
                                </select>
                            </div>

                        </div>
                        <div class="card shadow mb-4 no-border">
                            <!-- Card Body -->
                            <div class="card-body">
                                <div class="chart-area">
                                    <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand">
                                            <div class=""></div>
                                        </div>
                                        <div class="chartjs-size-monitor-shrink">
                                            <div class=""></div>
                                        </div>
                                    </div>
                                    <canvas id="myAreaChart" style="display: block; width: 668px; height: 320px;"
                                        width="668" height="320" class="chartjs-render-monitor"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-2 no-border">
                                    <div class="card-header no-header">
                                        Total Income
                                    </div>
                                    <div class="card-body">
                                        <h5 style="color: rgb(182, 0, 182);"><b class="total-exp">₹ ---</b></h5>
                                    </div>
                                </div>
                                <div class="card mb-2 no-border">
                                    <div class="card-header no-header">
                                        Total Expenses
                                    </div>
                                    <div class="card-body">
                                        <h5 style="color: rgb(182, 0, 182);"><b class="total-inc">₹ ---</b></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card no-border mb-2">
                                    <!-- <div class="card-header no-header">
                                        Categories Expense
                                    </div> -->
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="chart-pie pl-2 pt-2">
                                                    <div class="chartjs-size-monitor">
                                                        <div class="chartjs-size-monitor-expand">
                                                            <div class=""></div>
                                                        </div>
                                                        <div class="chartjs-size-monitor-shrink">
                                                            <div class=""></div>
                                                        </div>
                                                    </div>
                                                    <canvas id="myPieChart3" width="301" height="245"
                                                        class="chartjs-render-monitor"
                                                        style="display: block; width: 301px; height: 245px;"></canvas>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                            <ul class="pt-4 pl-1" style=" list-style-type:none;">
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #7bff00"></div>Housing
                                            </li>
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #ea4c89"></div>Food  
                                            </li>
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #32c766"></div>Transport
                                            </li>
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #0057ff"></div>Utilities 
                                            </li>
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #f48024"></div>Medical 
                                            </li>
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #8198ff"></div>Fun 
                                            </li>
                                            <li>
                                                <div class="graph-shading-box" style="background-color: #31B7BC"></div>Misc.
                                            </li>
                                        </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>


				`
        return view
    },
    after_render: async () => {}

}

export default Dashboard;