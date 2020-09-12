export const uiChartsCtrl = (function () {
    const domStrings = {
        totalInc: ".total-inc",
        totalExp: ".total-exp",
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

    function number_format(number, decimals, dec_point, thousands_sep) {
        // *     example: number_format(1234.56, 2, ',', ' ');
        // *     return: '1 234,56'
        number = (number + "").replace(",", "").replace(" ", "");
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
            dec = typeof dec_point === "undefined" ? "." : dec_point,
            s = "",
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return "" + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || "").length < prec) {
            s[1] = s[1] || "";
            s[1] += new Array(prec - s[1].length + 1).join("0");
        }
        return s.join(dec);
    }



    return {
        updateLineGraph: function (dataObj) {
            const newObj = dataObj;
            const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            if (newObj !== null && newObj.totalInc !== 0 && newObj.totalExp !== 0 && newObj.monthsObj !== null) {

                const newTotalExp = newObj.totalInc;
                const newTotalInc = newObj.totalExp;
                document.querySelector(domStrings.totalExp).innerText = '₹ ' + format(newTotalExp);
                document.querySelector(domStrings.totalInc).innerText = '₹ ' + format(newTotalInc);

                //****************Update Area Graph*********************** */
                const data = [];
                for (let key of Object.keys(dataObj.monthsObj)) {
                    // data.push(dataObj.monthsObj[key]);
                    const monthKey = allMonths.indexOf(key);
                    data[monthKey] = dataObj.monthsObj[key];
                }

                var ctx = document.getElementById("myAreaChart");
                var myLineChart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [{
                            label: "Savings",
                            lineTension: 0.3,
                            backgroundColor: "rgba(78, 115, 223, 0.05)",
                            borderColor: "rgba(78, 115, 223, 1)",
                            pointRadius: 3,
                            pointBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointBorderColor: "rgba(78, 115, 223, 1)",
                            pointHoverRadius: 3,
                            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                            pointHitRadius: 10,
                            pointBorderWidth: 2,
                            data: data,
                        }, ],
                    },
                    options: {
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                left: 10,
                                right: 25,
                                top: 25,
                                bottom: 0,
                            },
                        },
                        scales: {
                            xAxes: [{
                                time: {
                                    unit: "date",
                                },
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                                ticks: {
                                    maxTicksLimit: 7,
                                },
                            }, ],
                            yAxes: [{
                                ticks: {
                                    maxTicksLimit: 5,
                                    padding: 10,
                                    // Include a dollar sign in the ticks
                                    callback: function (value, index, values) {
                                        return "₹" + number_format(value);
                                    },
                                },
                                gridLines: {
                                    color: "rgb(234, 236, 244)",
                                    zeroLineColor: "rgb(234, 236, 244)",
                                    drawBorder: false,
                                    borderDash: [2],
                                    zeroLineBorderDash: [2],
                                },
                            }, ],
                        },
                        legend: {
                            display: false,
                        },
                        tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            titleMarginBottom: 10,
                            titleFontColor: "#6e707e",
                            titleFontSize: 14,
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            intersect: false,
                            mode: "index",
                            caretPadding: 10,
                            callbacks: {
                                label: function (tooltipItem, chart) {
                                    var datasetLabel =
                                        chart.datasets[tooltipItem.datasetIndex].label || "";
                                    return datasetLabel + ": ₹" + number_format(tooltipItem.yLabel);
                                },
                            },
                        },
                    },
                });



            } else {

                document.querySelector(domStrings.totalExp).innerText = '₹ --- ';
                document.querySelector(domStrings.totalInc).innerText = '₹ ---';
            }

        },
        updateExpenseChart: function (dataObj) {
            if (dataObj !== undefined) {
                let labels = [],
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
                for (let key of Object.keys(dataObj)) {
                    labels.push(key);
                    data.push(dataObj[key]);
                    bgColor.push(colorData[key]);
                }
                var ctx2 = document.getElementById("myPieChart3");
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
        }
    }
})();