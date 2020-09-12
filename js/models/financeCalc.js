export const budgetController = (function () {
	//Some code
	var Income = function (id, description, value, category) {
		this.id = id;
		this.description = description;
		this.value = value;
		this.category = category
	};

	var Expense = function (id, description, value, category) {
		this.id = id;
		this.description = description;
		this.value = value;
		this.category = category;
	};

	Expense.prototype.calcPercentage = function (totalInc) {
		if (totalInc > 0) {
			this.percentage = Math.round((this.value / totalInc) * 100);
		} else {
			this.percentage = -1;
		}
	};

	Expense.prototype.getPercentage = function () {
		return this.percentage;
	};

	var calcTotal = function (type) {
		var sum = 0;
		data.allItems[type].forEach(function (curr) {
			sum += curr.value;
		});
		data.total[type] = sum;
	};

	var data = {
		allItems: {
			inc: [],
			exp: [],
		},
		total: {
			inc: 0,
			exp: 0,
		},
		budget: 0,
		percentage: -1,
	};

	return {
		addItem: function (type, id, description, value, category) {
			var newItem, ID, defaultCategory;

			defaultCategory = "Income";

			// if (data.allItems[type].length > 0) {
			// 	ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			// } else {
			// 	ID = 0;
			// }
			ID = parseInt(id);
			if (type === "exp") {
				newItem = new Expense(ID, description, value, category);


			} else if (type === "inc") {
				newItem = new Income(ID, description, value, defaultCategory);

			}
			data.allItems[type].push(newItem);
			return newItem;
		},

		deleteItem: function (type, id) {

			var ids, index;

			// id = 6
			//data.allItems[type][id];
			// ids = [1 2 4  8]
			//index = 3

			ids = data.allItems[type].map(function (current) {
				return current.id;
			});

			index = ids.indexOf(id);

			if (index !== -1) {
				data.allItems[type].splice(index, 1);

			}
		},

		calculateBudget: function () {
			// Calculate inc and exp
			calcTotal("exp");
			calcTotal("inc");

			//Calculate Budget
			data.budget = data.total.inc - data.total.exp;

			//Calculate percentage
			if (data.total.inc > 0) {
				data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
			} else {
				data.percentage = -1;
			}
		},


		calculatePercentage: function () {
			//
			data.allItems.exp.forEach(function (curr) {
				curr.calcPercentage(data.total.inc);
			});
		},

		getPercentage: function () {
			var allPerc = data.allItems.exp.map(function (curr) {
				return curr.getPercentage();
			});
			return allPerc;
		},

		getBudget: function () {
			return {
				budget: data.budget,
				totalInc: data.total.inc,
				totalExp: data.total.exp,
				percentage: data.percentage,
				allInc: data.allItems.inc,
				allExp: data.allItems.exp
			};
		},

		testing: function () {
			console.log(data);
		},

		clearBudget: function () {
			data.allItems.inc = [];
			data.allItems.exp = [];
			data.total.inc = 0;
			data.total.exp = 0;
			data.budget = 0;
			data.percentage = 0;

		}
	};
})();