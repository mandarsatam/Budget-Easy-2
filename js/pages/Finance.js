let Finance = {
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
                            <h1 class="h3 mb-0 text-gray-800 page-title">Finance</h1>
                            <div class="d-sm-inline-block no-border"> 
								<select class="browser-default custom-select  month-select no-border">
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
                        </div>
						<div class="row">
							<div class="col-xl-4 col-lg-5">

								<div class="card mb-3 no-border">
									<div class="card-body">
										<h3 class="h5 dark">Month's Budget</h3>
										<div class="input-group mb-2">
											<div class="input-group-prepend">
												<span class="input-group-text">₹</span>
											</div>
											<input type="number" class="form-control add-budget-input"
												aria-label="Amount (to the nearest dollar)">
											<div class="input-group-append">
												<span class="input-group-text">.00</span>
											</div>
										</div>
										<button type="button" class="btn btn-dark updateBudget">
											<span>Save</span>
										</button>
									</div>
								</div>
								<div class="d-sm-flex align-items-center justify-content-between mb-2">
									<h5>Saving Goals</h5>
									<button type="button" class="btn custom-btn-light btn-light">
										<span>+</span>
									</button>
								</div>

								<div class="card mb-1 no-border ">
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
								<div class="card mb-1 no-border ">
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
								<div class="card mb-1 no-border ">
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
							<div class="col-xl-8 col-lg-7 budgety-part">
								<div class="card shadow no-border">
									<div class="card-body top-card">

										<div class="budget__title">
											<span class="budget__title--month">%Month%</span>
										</div>

										<div class="budget__value">---</div>



										<div class="card bg-primary text-white shadow mb-1">
											<div class="card-body row budget__income">
												<div class="budget__income--text col-md-6 col-sm-12">
													Income
												</div>
												<div class="right col-md-6 col-sm-12">
													<div class="budget__income--percentage right">
														&nbsp;
													</div>
													<div class="budget__income--value right">
														---
													</div>

												</div>
											</div>
										</div>



										<div class="card bg-danger text-white shadow mb-2">
											<div class="card-body row budget__expenses">
												<div class="budget__expenses--text col-md-6 col-sm-12">
													Expenses
												</div>
												<div class="right col-md-6 col-sm-12">
													<div class="budget__expenses--percentage right">---</div>
													<div class="budget__expenses--value right">
														---
													</div>

												</div>

											</div>
										</div>
									</div>
								</div>

								<div class="bottom">
									<div class="add">
									<div class="add__container row">
									<!-- <select class="add__type">
											<option value="inc" selected>+</option>
											<option value="exp">-</option>
										</select> -->
									<div class="button r col-md-1.5" id="button-1">
										<input type="checkbox" class="add__type checkbox" id="1" />
										<div class="knobs"></div>
										<div class="layer"></div>
									</div>
									<!-- ****************Catrogry Select********************** -->
									<div id="app-cover" class="col-md-2 disabled-view-button">
										<!-- <div id="select-box"> -->
										<input type="checkbox" id="options-view-button">
										<div id="select-button" class="brd">
											<div id="selected-value">
												<p>Category</p>
											</div>
											<div id="chevrons">
												<!-- <i class="fas fa-chevron-up"></i> -->
												<i class="fas fa-chevron-down"></i>
											</div>
										</div>
										<div id="options">
											<div class="option">
												<input class="s-c top" type="radio" name="platform"
													value="Housing">
												<input class="s-c bottom" type="radio" name="platform"
													value="Housing">
												<i class="fas fa-home"></i>
												<span class="label">Housing</span>
												<span class="opt-val">Housing</span>
											</div>
											<div class="option">
												<input class="s-c top" type="radio" name="platform"
													value="Food">
												<input class="s-c bottom" type="radio" name="platform"
													value="Food">
												<i class="fas fa-utensils"></i>
												<span class="label">Food</span>
												<span class="opt-val">Food</span>
											</div>
											<div class="option">
												<input class="s-c top" type="radio" name="platform"
													value="Transport">
												<input class="s-c bottom" type="radio" name="platform"
													value="Transport">
												<i class="fas fa-subway"></i>
												<span class="label">Transport</span>
												<span class="opt-val">Transport</span>
											</div>
											<div class="option">
												<input class="s-c top" type="radio" name="platform"
													value="Utilities">
												<input class="s-c bottom" type="radio" name="platform"
													value="Utilities">
												<i class="fas fa-bolt"></i>
												<span class="label">Utilities</span>
												<span class="opt-val">Utilities</span>
											</div>
											<div class="option">
												<input class="s-c top" type="radio" name="platform"
													value="Medical">
												<input class="s-c bottom" type="radio" name="platform"
													value="Medical">
												<i class="fas fa-prescription-bottle-alt"></i>
												<span class="label">Medical</span>
												<span class="opt-val">Medical</span>
											</div>
											<div class="option">
												<input class="s-c top" type="radio" name="platform"
													value="Fun">
												<input class="s-c bottom" type="radio" name="platform"
													value="Fun">
												<i class="fas fa-film"></i>
												<span class="label">Fun</span>
												<span class="opt-val">Fun</span>
											</div>
											<div class="option">
														<input class="s-c top" type="radio" name="platform"
															value="Misc">
														<input class="s-c bottom" type="radio" name="platform"
															value="Misc">
														<i class="fas fa-money-bill-wave"></i> <span
															class="label">Misc.</span>
														<span class="opt-val">Misc.</span>
													</div>
											<div id="option-bg"></div>
										</div>


									</div>
									<!-- **************************************************** -->
									<input type="text" class="add__description col-md-5"
										placeholder="Add description" />
									<input type="number" class="add__value col-md-2" placeholder="Value" />
									<button class="add__btn col-md-1.5">
										<i class="ion-ios-checkmark-outline"></i>
									</button>
								</div>
									</div>

									<div class="container-fluid inc-exp-container">
										<div class="income card mb-3">
											<div class="card-header income__title">
												<h2>Income</h2>
											</div>

											<div class="income__list">

											</div>
										</div>

										<div class="expenses card mb-3">
											<div class="card-header expenses__title">
												<h2>Expenses</h2>
											</div>

											<div class="expenses__list">
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                    
                    
                    `;
		return view;
	},
	after_render: async () => {},
};

export default Finance;