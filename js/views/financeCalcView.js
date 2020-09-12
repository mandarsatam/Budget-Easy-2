//UI Contorller
export const uiController = (function () {
	//Some code
	var domStrings = {
		inputType: ".add__type",
		inputDescription: ".add__description",
		inputValue: ".add__value",
		inputButton: ".add__btn",
		incomeContainer: ".income__list",
		expenseContainer: ".expenses__list",
		budgetLabel: ".budget__value",
		incomeLabel: ".budget__income--value",
		expenseLabel: ".budget__expenses--value",
		percentageLabel: ".budget__expenses--percentage",
		container: ".inc-exp-container",
		expensesPercentageLabel: ".item__percentage",
		currentMonth: ".budget__title--month",
	};

	var format = function (num, type) {
		var numSplit, int, dec, sign;
		num = Math.abs(num);
		num = num.toFixed(2);
		numSplit = num.split(".");
		int = numSplit[0];
		if (int.length > 3) {
			int =
				int.substring(0, int.length - 3) +
				"," +
				int.substring(int.length - 3, int.length);
		}
		dec = numSplit[1];

		return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
	};

	var getIconName = function (category) {
		var iconName;
		switch (category) {
			case "Income":
				iconName = "rupee-sign";
				break;
			case "Housing":
				iconName = "home"
				break;
			case "Food":
				iconName = "utensils"
				break;
			case "Transport":
				iconName = "subway"
				break;
			case "Utilities":
				iconName = "bolt"
				break;
			case "Medical":
				iconName = "prescription-bottle-alt"
				break;
			case "Fun":
				iconName = "film"
				break;
			case "Misc":
				iconName = "money-bill-wave"
				break;
			default:
				iconName = "rupee-sign";
		}
		return iconName;
	}

	var nodeListForEach = function (list, callback) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i);
		}
	};
	var checkIncExp = function (checkBox) {
		if (checkBox.checked == true) {
			return "exp";
		} else {
			return "inc";

		}
	};

	return {
		getInput: function () {
			const rbs = document.querySelectorAll('.s-c');
			let selectedValue;
			for (const rb of rbs) {
				if (rb.checked) {
					selectedValue = rb.value;
					break;
				}
			}
			return {
				inputType: checkIncExp(document.getElementById("1")),
				inputCategory: checkIncExp(document.getElementById("1")) === "exp" ? selectedValue : "Income",
				inputDescription: document.querySelector(domStrings.inputDescription)
					.value,
				inputValue: parseFloat(
					document.querySelector(domStrings.inputValue).value
				),
			};
		},

		addListItem: function (obj, type) {
			//Add the html string
			var html, element, newHTML;
			if (type === "inc") {
				element = domStrings.incomeContainer;
				html =
					'<div class="item clearfix" id="inc-%id%"><div class="item__description"><i class="fas fa-%iconName% description-icon"></i> <div class="description-text">%description%</div></div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
			} else if (type === "exp") {
				element = domStrings.expenseContainer;
				html =
					'<div class="item clearfix" id="exp-%id%"><div class="item__description"> <i class="fas fa-%iconName% description-icon nullify"></i><div class="description-text">%description%</div> </div><div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
			}

			newHTML = html.replace("%id%", obj.id);
			newHTML = newHTML.replace("%description%", obj.description);
			newHTML = newHTML.replace("%value%", format(obj.value, type));
			newHTML = newHTML.replace("%iconName%", getIconName(obj.category));

			document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
		},

		deleteListItem: function (selectorId) {
			var el = document.getElementById(selectorId);
			el.parentNode.removeChild(el);
		},

		clearListItems: function () {
			const listItems = document.getElementsByClassName("item");
			while (listItems.length !== 0) {
				listItems.forEach((el) => {
					el.remove();
					console.log(el);
				});
			}
			document.querySelector(".add-budget-input").placeholder = "";
		},

		clearFields: function () {
			var fields, fieldsArr;

			fields = document.querySelectorAll(
				domStrings.inputDescription + ", " + domStrings.inputValue
			);

			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function (current, index, array) {
				current.value = "";
			});
			fieldsArr[0].focus();
		},

		addBudget: function (obj) {
			var type;
			obj.budget > 0 ? (type = "inc") : (type = "exp");
			document.querySelector(domStrings.budgetLabel).innerHTML = format(
				obj.budget,
				type
			);
			document.querySelector(domStrings.incomeLabel).innerHTML = format(
				obj.totalInc,
				"inc"
			);
			document.querySelector(domStrings.expenseLabel).innerHTML = format(
				obj.totalExp,
				"exp"
			);
			if (obj.percentage > 0) {
				document.querySelector(domStrings.percentageLabel).innerHTML =
					obj.percentage + "%";
			} else {
				document.querySelector(domStrings.percentageLabel).innerHTML = "---";
			}
		},

		displayPercentages: function (percentages) {
			var fields = document.querySelectorAll(
				domStrings.expensesPercentageLabel
			);

			nodeListForEach(fields, function (curr, index) {
				if (percentages[index] > 0) {
					curr.textContent = percentages[index] + "%";
				} else {
					curr.textContent = "---";
				}
			});
		},

		getMonth: function () {
			var now, year, month, year, months;
			now = new Date();
			year = now.getFullYear();
			month = now.getMonth();
			months = [
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
			// document.querySelector(domStrings.currentMonth).textContent =
			// 	months[month] + " " + year;
			document.querySelector(".month-select").selectedIndex = month;
		},

		changeType: function () {
			var fields = document.querySelectorAll(
				domStrings.inputType +
				"," +
				domStrings.inputDescription +
				"," +
				domStrings.inputValue
			);
			nodeListForEach(fields, function (curr) {
				curr.classList.toggle("red-focus");
			});


			document.querySelector(domStrings.inputButton).classList.toggle("red");
			document.getElementById("app-cover").classList.toggle("disabled-view-button");
		},

		getDomStrings: function () {
			return domStrings;
		},
	};
})();