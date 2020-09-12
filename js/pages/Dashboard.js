let Dashboard = {
    render: async () => {
        let view = /*html*/ `
		<div id="content" class="row">
                    <div class="col-lg-8">
                        <!-- Begin Page Content -->
                        <div class="container-fluid">
                            <!-- Page Heading -->
                            <div class="spacer"></div>
                            <div class="d-sm-flex align-items-center justify-content-between mb-2">
                                <!-- Sidebar Toggle (Topbar) -->
                                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <h1 class="h3 mb-2 text-gray-800 page-title">Home</h1>
                                <div class="mb-2">
                                <div class="d-sm-inline-block no-border"> 
								<select class="browser-default custom-select  month-select no-border .square-border-radius">
									<option class="indv-month" value="1">January</option>
									<option class="indv-month" value="2">February</option>
									<option class="indv-month" value="3">March</option>
									<option class="indv-month" value="4">April</option>
									<option class="indv-month" value="5">May</option>
									<option class="indv-month" value="6">June</option>
									<option class="indv-month" value="7">July</option>
									<option class="indv-month" value="8">August</option>
									<option class="indv-month" value="9">September</option>
									<option class="indv-month" value="10">October</option>
									<option class="indv-month" value="11">November</option>
									<option class="indv-month" value="12">December</option>
								</select>
                            </div>
                                    <a class="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm ml-1
                                    " href="/#/finance">+</a>
                                </div>

                            </div>

                            <div class="row">

                                <div class="col-lg-8 pl-2 pr-2 mb-2">
                                    <div class="card no-border">
                                        <div class="container-fluid pl-2">
                                            <div class="row pb-0">
                                            <div class="col-md-6 pt-2 pr-0"><h5>Budget</h5>
                                                    <div class="pt-4 pr-1">
                                                        <div>

                                                            <div class="graph-shading-box" style="background-color: #FBDBDD"></div>
                                                            <p>Available: <b class="available-budget">₹ ---</b></p>

                                                        </div>
                                                        <div>
                                                            <div class="graph-shading-box" style="background-color: #ED6E78"></div>
                                                            <p>Expenses: <b class="total-expenses">₹ ---</b></p>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                                <div class="chart-pie col-md-6 cards-less-padding pb-0 pt-0 pl-3">
                                                <div class="chartjs-size-monitor">
                                                    <div class="chartjs-size-monitor-expand">
                                                        <div class=""></div>
                                                    </div>
                                                    <div class="chartjs-size-monitor-shrink">
                                                        <div class=""></div>
                                                    </div>
                                                </div>
                                                <canvas id="myPieChart" width="301" height="245"
                                                    class="chartjs-render-monitor"
                                                    style="display: block; width: 301px; height: 245px;"></canvas>
                                            </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 pl-2">
                                    <div class="card mb-2 no-border">
                                        <div
                                            class="card-header no-header d-flex flex-row align-items-center justify-content-between">
                                            Monthly Budget
                                            <div class="dropdown no-arrow">
                                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div class="dropdown-header">Dropdown Header:</div>
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <h5 style="color: rgb(255, 53, 164);"><b class="monthly-budget-card">₹ ---</b></h5>
                                        </div>
                                    </div>
                                    <div class="card mb-2 no-border">
                                        <div class="card-header no-header">
                                            Total Expenses
                                        </div>
                                        <div class="card-body">
                                            <h5 style="color: #ED6E78;"><b class="total-expenses-card">₹ ---</b></h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="d-sm-flex align-items-center justify-content-between mb-2  ml-2">
                                    <h5 class="list-inline-item">Saving Goals</h5>
                                    <button type="button" class="btn custom-btn-light btn-light ml-2 list-inline-item">
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 pl-1">
                                <div class="card no-border">
                                    <div
                                        class="card-header no-header d-flex flex-row align-items-center justify-content-between">
                                        <span>Travel</span>
                                        <div class="dropdown no-arrow">
                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                aria-labelledby="dropdownMenuLink">
                                                <div class="dropdown-header">Dropdown Header:</div>
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <i class="fas fa-plane mb-2"></i>
                                        <span>₹ 1300 / ₹ 20000</span>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info" role="progressbar"
                                                        style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="mb-0 mr-3">50%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="card no-border">
                                    <div
                                        class="card-header no-header d-flex flex-row align-items-center justify-content-between">
                                        <span>Car</span>
                                        <div class="dropdown no-arrow">
                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                aria-labelledby="dropdownMenuLink">
                                                <div class="dropdown-header">Dropdown Header:</div>
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <i class="fas fa-car"></i>
                                        <span>₹ 1300 / ₹ 20000</span>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info" role="progressbar"
                                                        style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="mb-0 mr-3">50%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="card no-border">
                                    <div
                                        class="card-header no-header d-flex flex-row align-items-center justify-content-between">
                                        <span>Coffee Machine</span>
                                        <div class="dropdown no-arrow">
                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                aria-labelledby="dropdownMenuLink">
                                                <div class="dropdown-header">Dropdown Header:</div>
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <i class="fas fa-mug-hot"></i>
                                        <span>₹ 1300 / ₹ 20000</span>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info" role="progressbar"
                                                        style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="mb-0 mr-3">50%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 bg-white monthly-analytic-div pr-0 pl-0">
                        <div class="container-fluid ">
                            <!-- Page Heading -->
                            <div class="spacer"></div>

                            <h5 class="mb-0 text-gray-800 pt-1">Monthly Analytics</h5>

                            <div class="row">
                                <div class="col">
                                    <div class="chart-pie">
                                        <div class="chartjs-size-monitor">
                                            <div class="chartjs-size-monitor-expand">
                                                <div class=""></div>
                                            </div>
                                            <div class="chartjs-size-monitor-shrink">
                                                <div class=""></div>
                                            </div>
                                        </div>
                                        <canvas id="myPieChart2" width="150" height="150" class="chartjs-render-monitor"
                                            style="display: block; width: 150px; height: 150px;"></canvas>
                                    </div>

                                </div>
                                <div class="col">
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
                                <div class="container-fluid exp-analysis-container">
                                    <div class="income">
                                    <h5 class="expense-analysis-header">Expenses</h5>

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

{
    /* <div class="chart-pie col-md-6 cards-less-padding pb-0 pt-0 pl-3"style="padding-left: 20px; ">
    <div class="chartjs-size-monitor">
        <div class="chartjs-size-monitor-expand">
            <div class=""></div>
        </div>
        <div class="chartjs-size-monitor-shrink">
            <div class=""></div>
        </div>
    </div>
    <canvas id="myPieChart" width="130" height="130"
        class="chartjs-render-monitor"
        style="display: block; width: 130px; height: 130px;">
    </canvas>
    </div> */
}

/* <div class="item-exp-analysis  clearfix" id="income-0">
            {<div class="item__description">
                <i class="fas fa-home description-icon"></i>
                <div class="description-text">Salary</div>
            </div>
            <div class="right clearfix">
                <div class="exp-analysis__value">+ 2,100.00</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i
                            class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
        <div class="item-exp-analysis  clearfix" id="income-0">
            <div class="item__description">
                <i class="fas fa-home description-icon"></i>
                <div class="description-text">Salary</div>
            </div>
            <div class="right clearfix">
                <div class="exp-analysis__value">+ 2,100.00</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i
                            class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
        <div class="item-exp-analysis  clearfix" id="income-0">
            <div class="item__description">
                <i class="fas fa-home description-icon"></i>
                <div class="description-text">Salary</div>
            </div>
            <div class="right clearfix">
                <div class="exp-analysis__value">+ 2,100.00</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i
                            class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div> */