export const uiDashCtrl = (function () {
    const domStrings = {
        availableBudget: ".available-budget",
        totalExpenses: ".total-expenses",
        monthlyBudgetCard: ".monthly-budget-card",
        totalExpensesCard: ".total-expenses-card"
    };

    const format = function (num) {
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
        return " " + int;
    };
    const getIconName = function (category) {
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


    //*****************PieChart-2**********************

    return {
        updateMainPageUI: function (dataObj) {
            const newObj = dataObj;
            if (newObj !== null && "budget" in newObj && newObj.total.inc !== 0 && newObj.total.exp !== 0) {
                console.log("running");
                const newTotalExp = newObj.total.exp;
                const newMonthlyBudget = newObj.budget.monthBudget;
                const newAvailableBudgetText = newMonthlyBudget - newTotalExp;
                document.querySelector(domStrings.totalExpenses).innerText = '₹ ' + format(newTotalExp);
                document.querySelector(domStrings.availableBudget).innerText = '₹ ' + format(newAvailableBudgetText);
                document.querySelector(domStrings.monthlyBudgetCard).innerText = '₹ ' + format(newMonthlyBudget);
                document.querySelector(domStrings.totalExpensesCard).innerText = '₹ ' + format(newTotalExp);
                //*****************PieChart-1**********************
                var ctx = document.getElementById("myPieChart");
                ctx.height = 500;
                var myPieChart = new Chart(ctx, {
                    type: "doughnut",
                    data: {
                        labels: ["Expenses ", "Available"],
                        datasets: [{
                            // data: [100 - Math.floor(((newTotalExp / newAvailableBudgetText) * 100)), Math.floor(((newTotalExp / newAvailableBudgetText) * 100))],
                            data: [Math.floor(newTotalExp), Math.floor(newAvailableBudgetText)],
                            backgroundColor: ["#ED6E78", "#FBDBDD"],
                            hoverBackgroundColor: ["#E84855", "#F9C8CB"],
                            hoverBorderColor: "rgba(234, 236, 244, 1)",
                        }, ],
                    },
                    options: {
                        maintainAspectRatio: false,
                        tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            // xPadding: 15,
                            // yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                        },
                        legend: {
                            display: false,
                        },
                        cutoutPercentage: 80,
                    },
                });

                //*****************PieChart-1**********************



            } else {
                console.log("nopeeeee");
                document.querySelector(domStrings.totalExpenses).innerText = '₹ --- ';
                document.querySelector(domStrings.availableBudget).innerText = '₹ ---';
                document.querySelector(domStrings.monthlyBudgetCard).innerText = '₹ ---';
                document.querySelector(domStrings.totalExpensesCard).innerText = '₹ ---';
            }

        },
        updateMonthlyAnalysis: function (dataObj) {
            if (dataObj !== undefined) {
                let html, element, newHTML, labels = [],
                    data = [],
                    bgColor = [];
                const colorData = {
                    "Housing": "#7bff00",
                    "Food": "#ea4c89",
                    "Transport": "#32c766",
                    "Utilities": "#0057ff",
                    "Medical": "#f48024",
                    "Fun": "#8198ff",
                    "Misc.": "#31B7BC"
                }
                element = ".exp-analysis-container"
                html = ' <div class="item-exp-analysis  clearfix"> <div class="item__description"> <i class="fas fa-%iconName% description-icon"></i> <div class="description-text">%description%</div> </div> <div class="right clearfix"> <div class="exp-analysis__value">- ₹%value%</div> </div> </div> ';
                for (let key of Object.keys(dataObj)) {
                    labels.push(key);
                    data.push(dataObj[key]);
                    bgColor.push(colorData[key]);

                    newHTML = html.replace("%description%", key);
                    newHTML = newHTML.replace("%value%", format(dataObj[key]));
                    newHTML = newHTML.replace("%iconName%", getIconName(key));

                    document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
                }
                var ctx2 = document.getElementById("myPieChart2");
                var myPieChart2 = new Chart(ctx2, {
                    type: "doughnut",
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: bgColor,
                            // hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#BDEA0B"],
                            hoverBorderColor: "rgba(234, 236, 244, 1)",
                        }, ],
                    },
                    options: {
                        maintainAspectRatio: false,
                        tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            borderColor: "#dddfeb",
                            // borderWidth: 2,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                        },
                        legend: {
                            display: false,
                        },
                        cutoutPercentage: 80,
                    },
                });
            }
        },
        clearDashBoard: function () {
            const listItems = document.getElementsByClassName("item-exp-analysis");
            while (listItems.length !== 0) {
                listItems.forEach((el) => {
                    el.remove();
                    console.log(el);
                });
            }
        }
    }
})();