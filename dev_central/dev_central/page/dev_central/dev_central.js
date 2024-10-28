frappe.pages['dev-central'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Development Central',
		single_column: true
	});
}