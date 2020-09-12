let Bottombar = {
    render: async () => {
        let view = /*html*/ `
					<div class="my-auto">
						<div class="copyright text-center my-auto">
							<span>Copyright &copy; Your Website 2020</span>
						</div>
					</div>
                `
        return view
    },
    after_render: async () => {}

}

export default Bottombar;