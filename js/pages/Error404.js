let Error404 = {
    render: async () => {
        let view = /*html*/ `
                    <div id="content">
                        <!-- Begin Page Content -->
                        <div class="container-fluid">
                            <!-- Page Heading -->
                            <div class="spacer"></div>
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <!-- Sidebar Toggle (Topbar) -->
                                <button
                                    id="sidebarToggleTop"
                                    class="btn btn-link d-md-none rounded-circle mr-3"
                                >
                                    <i class="fa fa-bars"></i>
                                </button>
                                <h1 class="h3 mb-0 text-gray-800">404 Not Found :(</h1>
                            </div>
                        </div>
                    </div>
`
        return view
    },
    after_render: async () => {}

}

export default Error404;