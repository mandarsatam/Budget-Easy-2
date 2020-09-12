export const modelChartsCtrl = (function () {

    return {
        calcTotalIncExp: function (childDataObj) {
            let totalInc = 0,
                totalExp = 0,
                monthsObj = {};

            const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            for (let key of Object.keys(childDataObj)) {
                totalInc = totalInc + childDataObj[key].total.inc;
                totalExp = totalExp + childDataObj[key].total.exp;
                monthsObj[key] = childDataObj[key].total.inc - childDataObj[key].total.exp;
            }
            allMonths.forEach(el => {
                if (!(el in monthsObj)) {
                    monthsObj[el] = 0;
                }
            });
            return {
                totalInc: totalInc,
                totalExp: totalExp,
                monthsObj: monthsObj
            }
        },
        calcCategoryTotal: function (childDataObj) {
            var newObj = {};
            for (let key of Object.keys(childDataObj)) {
                if (childDataObj[key] !== undefined) {
                    console.log("1st level par");
                    if ("allItems" in childDataObj[key]) {
                        console.log("2nd level par");
                        if ("exp" in childDataObj[key].allItems) {
                            console.log("3rd level par");
                            let expensesObj = childDataObj[key].allItems.exp;
                            if (expensesObj != null) {
                                expensesObj.forEach(el => {
                                    switch (el.category) {
                                        case "Housing":
                                            if (newObj.Housing)
                                                newObj.Housing = newObj.Housing + el.value;
                                            else newObj.Housing = el.value;
                                            break;
                                        case "Food":
                                            if (newObj.Food)
                                                newObj.Food = newObj.Food + el.value;
                                            else newObj.Food = el.value;
                                            break;
                                        case "Transport":
                                            if (newObj.transport)
                                                newObj.Transport = newObj.Transport + el.value;
                                            else newObj.Transport = el.value;
                                            break;
                                        case "Utilities":
                                            if (newObj.Utilities)
                                                newObj.Utilities = newObj.Utilities + el.value;
                                            else newObj.Utilities = el.value;
                                            break;
                                        case "Medical":
                                            if (newObj.Medical)
                                                newObj.Medical = newObj.Medical + el.value;
                                            else newObj.Medical = el.value;
                                            break;
                                        case "Fun":
                                            if (newObj.Fun)
                                                newObj.Fun = newObj.Fun + el.value;
                                            else newObj.Fun = el.value;
                                            break;
                                        case "Misc":
                                            if (newObj.Misc)
                                                newObj.Misc = newObj.Misc + el.value;
                                            else newObj.Misc = el.value;
                                            break;
                                            // default:
                                            //     newObj.Income = newObj.Income + el.value;
                                    }
                                })
                            }

                        }
                    }
                }
            }
            return newObj;

        }
    }
})();