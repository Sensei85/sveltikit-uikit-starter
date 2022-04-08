<script>
	import '../app.scss'
	import '../../node_modules/uikit/dist/js/uikit-core'
	import Navbar from '$components/partials/Navbar.svelte'
	import MobileNavbar from '$components/partials/MobileNavbar.svelte'
	import MobileSideMenu from '$components/partials/MobileSideMenu.svelte'
	import NotificationDrawer from '$components/partials/NotificationDrawer.svelte'
</script>

<div class="uk-offcanvas-content">
	<Navbar />
	<MobileNavbar />
	<MobileSideMenu />
	<NotificationDrawer />
</div>

<slot />
