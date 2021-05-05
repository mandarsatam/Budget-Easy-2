// FireBase
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
import "firebase/database";


// *********************************************************************************
import {
	pieGraphExample
} from "./demo/chart-pie-demo";
// import {
// 	chartExample
// } from "./demo/chart-area-demo";
import {
	jQueryFunc
} from "./sb-admin-2";
import {
	budgetController
} from "./models/financeCalc";
import {
	modelDashCtrl
} from "./models/Analytics";
import {
	modelChartsCtrl
} from "./models/ChartsCalc";
import {
	uiController
} from "./views/financeCalcView";
import {
	uiDashCtrl
} from "./views/dashboardViews";
import {
	uiChartsCtrl
} from "./views/uiChartsCtrl";



//************************************************ */
import Dashboard from "./pages/Dashboard.js"
import Finance from './pages/Finance.js'
import Error404 from './pages/Error404.js'
import Charts from './pages/Charts.js'
// import Settings from './pages/Error404.js'
// import PostShow     from './views/pages/PostShow.js'
// import Register     from './views/pages/Register.js'

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

import Utils from './services/Utils.js'



// ***************************Firebase Config**************************************
const firebaseConfig = {
	apiKey: "AIzaSyCC-dFnJIY0WjCFsp4VBoCsBo1hyr4lRqw",
	authDomain: "budget-easy-634f7.firebaseapp.com",
	databaseURL: "https://budget-easy-634f7.firebaseio.com",
	projectId: "budget-easy-634f7",
	storageBucket: "budget-easy-634f7.appspot.com",
	messagingSenderId: "698077828802",
	appId: "1:698077828802:web:0d859452bf92e7dfd70d5b",
	measurementId: "G-XGP4CG2W3E"
};

firebase.initializeApp(firebaseConfig);

const now = new Date();
const monthId = now.getMonth();
const year = now.getFullYear();
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
var month = months[monthId];
const userId = "admin";

const getMonthId = function (month) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return months.indexOf(month);
}

const updateMonth = function () {
	document.querySelector('.month-select').onchange = function () {
		const e = document.querySelector(".month-select");
		const strUser = e.options[e.selectedIndex].text;
		const page = document.querySelector(".page-title").innerText;
		month = strUser;
		console.log(month);
		if (page === "Home") {
			//Carry out Dashboard Functions(Dashboard Initialize)
			dashboardController.init();
		} else if (page === "Finance") {
			appController.changeMonthInitialize();
		} else if (page === "Charts") {
			chartsController.init();
		}

	};
}





const updateBudget = function () {
	const addBudget = () => {
		const input = parseInt(document.querySelector(".add-budget-input").value);
		if (!isNaN(input) &&
			input > 0) {
			const dbRefBudget = firebase.database().ref('/' + userId + '/' + month + '/budget');
			dbRefBudget.set({
				monthBudget: input
			});
		}
	}
	document
		.querySelector('.updateBudget')
		.addEventListener("click", addBudget);

	// document.addEventListener("keypress", function (event) {
	// 	if (event.keyCode == 13) {
	// 		addBudget();
	// 	}
	// });
};

const darkToggle = function (x) {
	document.querySelector("#dark-light-mode-a").addEventListener("click", function () {
		$("#dark-light-mode").toggleClass("fa-sun fa-moon");
		document.querySelectorAll(".inverted").forEach(result => {
			result.classList.toggle("invert");
		})
		document.documentElement.classList.toggle("dark-mode");
	});

}


//******************Finance Calculator*************************** */
//Global App Controller
const appController = (function (budgetCtrl, uiCtrl) {
	var dom = uiCtrl.getDomStrings();

	// var keydownEventHandler = function (event) {
	// 	if (event.keyCode == 13) {
	// 		ctrlAddItem();
	// 		console.log("event listened");
	// 	}
	// }

	var domEventListeners = function () {
		1
		document
			.querySelector(dom.inputButton)
			.addEventListener("click", ctrlAddItem);

		// document.addEventListener("keydown", function (event) {
		// 	if (event.keyCode == 13) {
		// 		ctrlAddItem();
		// 		console.log("event listened");
		// 	}
		// });

		document
			.querySelector(dom.container)
			.addEventListener("click", ctrlDeleteItem);

		document
			.querySelector(dom.inputType)
			.addEventListener("change", uiCtrl.changeType);
	};

	var removeDomEventListeners = function () {
		document
			.querySelector(dom.inputButton)
			.removeEventListener("click", ctrlAddItem);

		// document.removeEventListener("keydown", keydownEventHandler(event));

		document
			.querySelector(dom.container)
			.removeEventListener("click", ctrlDeleteItem);

		document
			.querySelector(dom.inputType)
			.removeEventListener("change", uiCtrl.changeType);
	}

	var calcBudget = function () {
		//5. Calculate the budget.
		budgetCtrl.calculateBudget();
		const budgetObj = budgetCtrl.getBudget();

		//6. Add the final budget to the UI.
		uiCtrl.addBudget(budgetObj);
		const dbRefTotal = firebase.database().ref('/' + userId + '/' + month + '/total');
		dbRefTotal.set({
			exp: budgetObj.totalExp,
			inc: budgetObj.totalInc
		});

	};

	var calcPercentage = function () {
		//Calculate Percentages
		budgetCtrl.calculatePercentage();

		//Read percentages from budget Controller
		var percentages = budgetCtrl.getPercentage();

		//Add the percentages to the UI.
		uiCtrl.displayPercentages(percentages);
	};



	var ctrlAddItem = function () {
		// 1. Read the input field data
		var input = uiCtrl.getInput();

		if (
			input.inputDescription != "" &&
			!isNaN(input.inputValue) &&
			input.inputValue > 0
		) {
			var newItem;
			if (input.inputType === "inc") {
				const dbRefAllItemsinc = firebase.database().ref('/' + userId + '/' + month + '/allItems/inc');
				(async function () {
					await dbRefAllItemsinc.once('value', snap => {
						var childData = snap.val();
						let dataLength;
						if (childData !== null) {
							dataLength = childData.length;
						} else {
							dataLength = 0;
						}
						console.log(dataLength);

						newItem = budgetCtrl.addItem(
							input.inputType,
							dataLength,
							input.inputDescription,
							input.inputValue,
							input.inputCategory
						);

						console.log(newItem.id);
						//3. Add the item to the UI
						uiCtrl.addListItem(newItem, input.inputType);

						//4. Clear input fields
						uiCtrl.clearFields();

						//Update Budget
						calcBudget();

						//Update Percentages
						calcPercentage();

						//Add to Firebase

						// if (newItem.constructor.name === "Income") {
							let dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems/inc/' + newItem.id);

							dbRefObject.set({
								description: newItem.description,
								id: newItem.id,
								value: newItem.value,
								category: newItem.category
							});
						// } else if (newItem.constructor.name === "Expense") {
						// 	const dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems/exp/' + newItem.id);
						// 	dbRefObject.set({
						// 		description: newItem.description,
						// 		id: newItem.id,
						// 		value: newItem.value,
						// 		category: newItem.category
						// 	});
						// }

					});
				})();
			} else if (input.inputType === "exp") {
				const dbRefAllItemsexp = firebase.database().ref('/' + userId + '/' + month + '/allItems/exp');
				(async function () {
					await dbRefAllItemsexp.once('value', snap => {
						var childData = snap.val();
						if (childData !== null) {
							var dataLength = childData.length;
						} else {
							var dataLength = 0;
						}

						newItem = budgetCtrl.addItem(
							input.inputType,
							dataLength,
							input.inputDescription,
							input.inputValue,
							input.inputCategory
						);
						//3. Add the item to the UI
						uiCtrl.addListItem(newItem, input.inputType);

						//4. Clear input fields
						uiCtrl.clearFields();

						//Update Budget
						calcBudget();

						//Update Percentages
						calcPercentage();

						//Add to Firebase

						// if (newItem.constructor.name === "Income") {
						// 	const dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems/inc/' + newItem.id);
						// 	dbRefObject.set({
						// 		description: newItem.description,
						// 		id: newItem.id,
						// 		value: newItem.value,
						// 		category: newItem.category
						// 	});
						// } else if (newItem.constructor.name === "Expense") {
							const dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems/exp/' + newItem.id);
							dbRefObject.set({
								description: newItem.description,
								id: newItem.id,
								value: newItem.value,
								category: newItem.category
							});
						// }

					});
				})();
			}

		}
	};

	var ctrlDeleteItem = function (event) {
		var itemId;
		itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
		if (itemId) {
			const splitId = itemId.split("-");
			const type = splitId[0];
			const id = parseInt(splitId[1]);

			//Delete item from datastructure
			budgetCtrl.deleteItem(type, id);

			//Delete Item from UI
			uiCtrl.deleteListItem(itemId);

			//Update Budget
			calcBudget();

			//Update Percentages
			calcPercentage();

			//Delete From Firebase
			if (type === "inc") {
				const dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems/inc/' + id);
				dbRefObject.remove();

			} else if (type === "exp") {
				const dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems/exp/' + id);
				dbRefObject.remove();
			}
		}
	};

	var initializeCalculator = async function () {
		uiCtrl.clearListItems();
		budgetCtrl.clearBudget();
		document.querySelector(".month-select").selectedIndex = getMonthId(month);
		document.querySelector(".budget__title--month").textContent =
			month + " " + year;
		const dbRefBudget = firebase.database().ref('/' + userId + '/' + month + '/budget/monthBudget');
		await dbRefBudget.once('value', snap => {
			var childData = snap.val();
			if (childData !== null) {
				document.querySelector(".add-budget-input").placeholder = childData;
			} else {
				document.querySelector(".add-budget-input").placeholder = "Add Budget";
			}
		});
		const dbRefObject = firebase.database().ref('/' + userId + '/' + month + '/allItems');
		try {
			await dbRefObject.once('value', snap => {
				var childData = snap.val();
				if (snap.hasChild('exp')) {
					const expArray = Object.values(childData.exp);
					expArray.forEach(el => {
						var newItem = budgetCtrl.addItem(
							"exp",
							el.id,
							el.description,
							el.value,
							el.category
						);
						uiCtrl.addListItem(newItem, "exp");

					});
				}
			});
			await dbRefObject.once('value', snap => {
				var childData = snap.val();
				if (snap.hasChild('inc')) {
					const incArray = Object.values(childData.inc);
					incArray.forEach(el => {
						var newItem = budgetCtrl.addItem(
							"inc",
							el.id,
							el.description,
							el.value,
							el.category
						);
						uiCtrl.addListItem(newItem, "inc");
					});
				}
			});
			calcBudget();
			calcPercentage();
		} catch (err) {
			console.log(err);
		}



	}



	return {
		init: function () {
			removeDomEventListeners();
			domEventListeners();
			initializeCalculator();

		},
		changeMonthInitialize: function () {
			initializeCalculator();
		}

	};
})(budgetController, uiController);


//***************Dashboard Controller*********************************

//modelDashCtrl, uiDashCtrl
const dashboardController = (function () {

	var initializeDashboard = function () {
		document.querySelector(".month-select").selectedIndex = getMonthId(month);
	}

	var updateMainPage = function () {
		const dbRefAllItemsinc = firebase.database().ref('/' + userId + '/' + month);
		(async function () {
			await dbRefAllItemsinc.once('value', snap => {
				var childData = snap.val();
				console.log(childData);
				uiDashCtrl.clearDashBoard();
				uiDashCtrl.updateMainPageUI(childData);
				const expenseAnalysis = modelDashCtrl.addExpenseTotal(childData);
				console.log(expenseAnalysis);
				uiDashCtrl.updateMonthlyAnalysis(expenseAnalysis);
			})
		})();
	}

	return {
		init: function () {
			initializeDashboard();
			updateMainPage();
		}
	};
})();


//***************Charts Controller******************************** */
//modelChartsCtrl, uiChartsCtrl
const chartsController = (function () {
	const updateMainChart = function () {
		const dbRefAllItemsinc = firebase.database().ref('/' + userId);
		(async function () {
			await dbRefAllItemsinc.once('value', snap => {
				// var childData = snap.val();
				const childData = snap.val();
				// uiDashCtrl.clearDashBoard();
				const totalIncExp = modelChartsCtrl.calcTotalIncExp(childData);
				uiChartsCtrl.updateLineGraph(totalIncExp);

				const categoryTotal = modelChartsCtrl.calcCategoryTotal(childData);
				// console.log(categoryTotal);
				uiChartsCtrl.updateExpenseChart(categoryTotal);
				// const expenseAnalysis = modelDashCtrl.addExpenseTotal(childData);
				// console.log(expenseAnalysis);
				// uiDashCtrl.updateMonthlyAnalysis(expenseAnalysis);
				// newItem = budgetCtrl.addItem(
				// 	input.inputType,
				// 	dataLength,
				// 	input.inputDescription,
				// 	input.inputValue,
				// 	input.inputCategory
				// );
				//3. Add the item to the UI
				// uiDashCtrl.updateMainPageUI(newItem);
			})
		})();
	}

	return {
		init: function () {
			// removeDomEventListeners();
			// domEventListeners();
			updateMainChart();
		}
	};
})();


//****************rishavs Router app*********************** */

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
	'/': Dashboard,
	'/finance': Finance,
	'/charts': Charts,
	// '/settings': Settings
};

const state = {};



// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
	// Lazy load view element:
	const header = null || document.getElementById('navbar-container');
	const content = null || document.getElementById('content-container');
	const footer = null || document.getElementById('footer-container');


	// Render the Header and footer of the page
	header.innerHTML = await Navbar.render();
	await Navbar.after_render();
	footer.innerHTML = await Footer.render();
	await Footer.after_render();


	// Get the parsed URl from the addressbar
	let request = Utils.parseRequestURL()

	// Parse the URL and if it has an id part, change it with the string ":id"
	let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

	// Get the page from our hash of supported routes.
	// If the parsed URL is not in our list of supported routes, select the 404 page instead
	let page = routes[parsedURL] ? routes[parsedURL] : Error404
	content.innerHTML = await page.render();
	await page.after_render();

	jQueryFunc(jQuery);

	if (page === Dashboard) {
		// chartExample();
		dashboardController.init();
		// pieGraphExample2();
		updateMonth();
		$(".sidebar-home").addClass("active");
		$(".sidebar-finance").removeClass("active");
		$(".sidebar-charts").removeClass("active");
		$(".sidebar-settings").removeClass("active");
		darkToggle();



	} else if (page === Finance) {
		appController.init();
		updateBudget();
		updateMonth();
		$(".sidebar-home").removeClass("active");
		$(".sidebar-finance").addClass("active");
		$(".sidebar-charts").removeClass("active");
		$(".sidebar-settings").removeClass("active");
		darkToggle();




	} else if (page === Charts) {
		chartsController.init();
		updateMonth();
		// chartExample();
		// pieGraphExample();
		$(".sidebar-home").removeClass("active");
		$(".sidebar-finance").removeClass("active");
		$(".sidebar-charts").addClass("active");
		$(".sidebar-settings").removeClass("active");
		darkToggle();


	}

	// } else if (page === Settings) {
	// 	$(".sidebar-home").removeClass("active");
	// 	$(".sidebar-finance").removeClass("active");
	// 	$(".sidebar-charts").removeClass("active");
	// 	$(".sidebar-settings").addClass("active");
	// }

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);