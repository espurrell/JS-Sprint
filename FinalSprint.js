//aided in developing the final form to print on webpage and also in console
fetch('./SprintRenters.json')
    .then(response => response.json())
    .then (data => {
        data.forEach(renter => {
            console.log(getLegalName(renter));
            console.log(getVehicle(renter));
            console.log(isLoyaltyMember(renter));
        });
    })
.catch(error =>{
        console.error(error);
    });

    function getLegalName(renter){
        return (`Welcome to Sprint Car Rentals ${renter.fname} ${renter.lname}.`);
    }

    function getVehicle(renter){
        return (`We have a ${renter.Vehicle} reserved for you.`);
    }

    function isLoyaltyMember(renter){
        if(renter.isLoyaltyMember == true)
        return (`Your loyalty benefits have been included!`)
        if(renter.isLoyaltyMember == false)
        return (`Would you like to join our loyalty program?`)
    }

