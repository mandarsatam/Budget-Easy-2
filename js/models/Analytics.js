export const modelDashCtrl = (function () {
    return {
        addExpenseTotal: function (childDataObj) {
            if (childDataObj !== null) {
                if ("allItems" in childDataObj) {
                    if ("exp" in childDataObj.allItems) {
                        let expensesObj = childDataObj.allItems.exp;
                        let newObj = {};
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
                        return newObj;
                    }
                }
            }
        }
    }
})();

// for (let el of allMonths) {
//     if (!(el in monthsObj)) {
//         monthsObj.el = 0;
//     }
// }