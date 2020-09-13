let Navbar = {
	render: async () => {
		let view = /*html*/ `
				<ul
					class="navbar-nav bg-white sidebar sidebar-light accordion toggled"
					id="accordionSidebar"
				>
					<!-- Sidebar - Brand -->
					<a
						class="sidebar-brand d-flex align-items-center justify-content-center"
						href="/#/"
					>
						<!-- <div class="sidebar-brand-icon rotate-n-15">
						<i class="fas fa-laugh-wink"></i>
					</div> -->
						<div class="sidebar-brand-text mx-3">Budget Easy<sup>2</sup></div>
					</a>

					<!-- Divider -->
					<!-- <hr class="sidebar-divider my-0" /> -->

					<!-- Nav Item - Dashboard -->
					<li class="nav-item sidebar-home">
						<a class="nav-link" href="/#/">
							<!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
							<i class="fas fa-home"></i>
							<span>Home</span></a
						>
					</li>


					<!-- Nav Item - Finance -->
					<li class="nav-item sidebar-finance">
						<a class="nav-link" href="/#/finance">
							<i class="fas fa-wallet"></i>
							<span>Finance</span></a
						>
					</li>

					<!-- Nav Item - Charts -->
					<li class="nav-item sidebar-charts">
						<a class="nav-link" href="/#/charts">
							<i class="fas fa-fw fa-chart-area"></i>
							<span>Dashboard</span></a
						>
					</li>

					<li class="nav-item sidebar-settings">
						<a
							class="nav-link collapsed"
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="true"
							aria-controls="collapseTwo"
							name="settings" id="dark-light-mode-a"
						>
							<i class="fas fa-moon" id="dark-light-mode"></i>
							<span>Settings</span>
						</a>
						<!-- <div
						id="collapseTwo"
						class="collapse"
						aria-labelledby="headingTwo"
						data-parent="#accordionSidebar"
					>
						<div class="bg-white py-2 collapse-inner rounded">
							<h6 class="collapse-header">Custom Components:</h6>
							<a class="collapse-item" href="buttons.html">Buttons</a>
							<a class="collapse-item" href="cards.html">Cards</a>
						</div>
					</div> -->
					</li>

					<!-- Divider -->
					<!-- <hr class="sidebar-divider d-none d-md-block" /> -->

					<!-- Sidebar Toggler (Sidebar) -->
					<div class="text-center d-none d-md-inline">
						<button class="rounded-circle border-0" id="sidebarToggle"></button>
					</div>
				</ul>
            `
		return view
	},
	after_render: async () => {}

}

export default Navbar;