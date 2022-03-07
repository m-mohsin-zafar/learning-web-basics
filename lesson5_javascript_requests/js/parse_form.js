export function parseForm(formEls){
    // Pizza Details
    let pizzaSize = getPizzaSize(formEls.pizzaSize.elements);
    let pizzaToppings = getPizzaToppings(formEls.pizzaToppings.elements);
    let pizzaCrust = getPizzaCrust(formEls.pizzacrust.options);
    let comments = formEls.comments.value;

    //Delivery Details
    let fname = formEls.fname.value;
    let lname = formEls.lname.value;
    let addressline1 = formEls.inputAddress.value;
    let addressline2 = formEls.inputAddress2.value;
    let city = formEls.inputCity.value;
    let state = getState(formEls.inputState.options);
    let zip = formEls.inputZip.value;

    return [pizzaSize, pizzaToppings, pizzaCrust, comments, fname, lname, addressline1, addressline2, city, state, zip]

}

const getPizzaSize = (el) => {
    for (let e of el){
        if (e.checked){
            return e.value;
        }
    }
}

const getPizzaToppings = (el) => {
    let toppings = [];
    for (let e of el){
        if (e.checked){
            toppings.push(e.value);
        }
    }
    return toppings;
}

const getPizzaCrust = (el) => {
    for (let e of el){
        if (e.selected){
            return e.text;
        }
    }
}

const getState = (el) => {
    for (let e of el){
        if (e.selected){
            return e.text;
        }
    }
}