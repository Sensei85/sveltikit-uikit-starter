import { writable } from 'svelte/store'

/** right navbar links */
export const navLeftLinks = writable([
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{
		title: 'Mega Menu',
		path: '#',
		isMegaMenu: true,
		subLinks: [
			[
				{ title: 'Clothes', isHeader: true },
				{ title: 'Link 1', path: '/link', active: true },
				{ title: 'Link 2', path: '/link' },
				{ title: 'Link 3', external: true, path: '/link' },
				{ title: 'Link 4', path: '/link' }
			],
			[
				{ title: 'Mobile', isHeader: true },
				{ title: 'Link 1', path: '/link' },
				{ title: 'Link 2', path: '/link' },
				{ title: 'Link 3', external: true, path: '/link' },
				{ title: 'Link 4', path: '/link' }
			],
			[
				{ title: 'Laptops', isHeader: true },
				{ title: 'Link 1', path: '/link' },
				{ title: 'Link 2', path: '/link' },
				{ title: 'Link 3', external: true, path: '/link' },
				{ title: 'Link 4', path: '/link' }
			],
			[
				{ title: 'Desktops', isHeader: true },
				{ title: 'Link 1', path: '/link' },
				{ title: 'Link 2', path: '/link' },
				{ title: 'Link 3', external: true, path: '/link' },
				{ title: 'Link 4', path: '/link' }
			],
			[
				{ title: 'Misc', isHeader: true },
				{ title: 'Link 1', path: '/link' },
				{ title: 'Link 2', path: '/link' },
				{ title: 'Link 3', external: true, path: '/link' },
				{ title: 'Link 4', path: '/link' }
			]
		]
	},
	{
		title: 'Dropdown',
		path: '#',
		hasSubMenu: true,
		subLinks: [
			{ title: 'Services 1', path: '/services' },
			{ title: 'Services 2', path: '/services' },
			{ title: 'Services 3', path: '/services' },
			{ title: 'Opens In New Tab', external: true, path: 'https://someexternallink.com' }
		]
	},
	{ title: 'Docs', path: '/docs' },
	{ title: 'Download', path: '/download' },
	{ title: 'Contact', path: '/contact' }
]);

/** left navbar links */
export const navRightLinks = writable([
	{ title: 'Login', path: '/login' },
	{ title: 'Register', path: '/register' }
])

/** footer links */
export const footerItems = writable([
	{
		gridSection: {
			sectionTitle: 'Quick Links',
			routes: [
				{
					metaTitle: 'Quick Link 1',
					title: 'Quick Link 1',
					external: true,
					link: '/'
				},
				{
					metaTitle: 'Quick Link 2',
					title: 'Quick Link 2',
					external: true,
					link: '/'
				},
				{
					metaTitle: 'Quick Link 3',
					title: 'Quick Link 3',
					external: true,
					link: '/'
				},
				{
					metaTitle: 'Quick Link 4',
					title: 'Quick Link 4',
					external: true,
					link: '/'
				}
			]
		}
	},
	{
		gridSection: {
			sectionTitle: 'More',
			routes: [
				{ metaTitle: 'Contact Us', title: 'Contact Us', link: '/contact' },
				{ metaTitle: 'Terms & Conditions', title: 'Terms & Conditions', link: '/terms-conditions' },
				{ metaTitle: 'Privacy Policy', title: 'Privacy Policy', link: '/privacy-policy' }
			]
		}
	},
	{
		gridSection: {
			sectionTitle: 'Contact',
			routes: [
				{
					metaTitle: 'Map Location',
					icon: 'mdi-home-map-marker',
					title: 'Queens Gambit Avenue',
					external: true,
					link: 'https://goo.gl/maps/'
				},
				{
					metaTitle: 'Support Email',
					icon: 'mdi-email-variant',
					title: 'support@yourapp.com',
					link: 'mailto:support@yourapp.com'
				},
				{
					metaTitle: 'Contact Number 1',
					icon: 'mdi-phone',
					title: '+123 456 7890',
					link: 'tel:+123 456 7890'
				},
				{
					metaTitle: 'Contact Number 2',
					icon: 'mdi-phone',
					title: '+123 456 7890',
					link: 'tel:+123 456 7890'
				}
			]
		}
	},
	{
		gridSection: {
			sectionTitle: 'Socials',
			component: 'SocialIconsGrid',
			routes: [
				{ 
					title: 'Facebook', 
					icon: 'mdi-facebook', 
					link: 'https://facebook.com' 
				},
				{ 
					title: 'Twitter', 
					icon: 'mdi-twitter', 
					link: 'https://twitter.com' 
				},
				{ 
					title: 'Instagram', 
					icon: 'mdi-instagram', 
					link: 'https://instagram.com' 
				},
				{
					title: 'LinkedIn',
					icon: 'mdi-linkedin',
					link: 'https://www.linkedin.com'
				}
			]
		}
	}
])

/** 
	* User menu items
  * Provide icons to your dropdown links as svg or class based html icons like so `<i class="mdi mdi-account"></i>` and they will just render effortlessly 
  * svg icon width and height is set to "12"
*/
export const userMenuItems = writable([
	{ title: 'Applications', external: true, path: '#!' },
	{ title: 'Notifications', path: '#!' },
	{
		hasHeader: true,
		headerTitle: 'General',
		children: [
			{ title: 'Help', active: true, path: '#!' },
			{ title: 'Send Feedback', path: '#!' }
		]
	},
	{
		hasHeader: true,
		headerTitle: 'Settings',
		children: [
			{
				title: 'Icon Example',
				path: '#!',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>`
			},
			{
				title: 'Profile Settings',
				path: '#!',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill"><path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/></svg>`
			},
			{
				title: 'App Settings',
				path: '#!',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>`
			}
		]
	}
])

/** Components side nav links */
const BASE_DIR = '/docs';
export const componentsDocsLinks = writable([
	{ title: 'Upload', path: `${BASE_DIR}/components/upload` },
	{ title: 'Slider', path: `${BASE_DIR}/components/slider` }
])

/** Documentation page right side navigation */
export const pageNavigation = writable([])

/** Get current year */
export const currentYear = writable()
const timeElapsed = Date.now()
const year = new Date(timeElapsed).getFullYear()
currentYear.set(year)