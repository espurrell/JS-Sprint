//prepared by Ed Spurrell
//prepared for Peter Rawthorne
//Completed Dec 12, 2023

fetch('./SprintRenters.json')
    .then(response => response.json())
    .then(data => {
        // Create a container to hold the people data
        const container = document.createElement('div');
        container.id = 'rentersContainer';
        // Loop through an array in the JSON data
        data.forEach(renter => {
            // Create a new div for each renter
            const renterDiv = document.createElement('div');
            renterDiv.className = 'renter';    
            //organzie functions
            getLegalName(renter);
            getVehicle(renter);
            isLoyaltyMember(renter);
            //add renter data to div
            renterDiv.innerHTML =`
            <h3>${getLegalName(renter)}</h3>
            <p>${getVehicle(renter)}</p>
            <p>${isLoyaltyMember(renter)}</p>`;
            //add renter div to container
            container.appendChild(renterDiv);
            
            console.log(`Welcome to Sprint Car Rentals ${renter.fname} ${renter.lname}.`);
            console.log(`We have a ${renter.Vehicle} reserved for you.`);
            console.log(`Your loyalty benefits have been included!`);
            console.log(`Would you like to join our loyalty program?`);

        });

        document.body.appendChild(container);
    })

    .catch(error =>{
        console.error(error);
    });

function getLegalName(renter){
    return (`Welcome to Sprint Car Rentals ${renter.fname} ${renter.lname}.`);
};

function getVehicle(renter){
    return (`We have a ${renter.Vehicle} reserved for you.`);
};

function isLoyaltyMember(renter){
    if(renter.isLoyaltyMember == true)
    return (`Your loyalty benefits have been included!`)
    if(renter.isLoyaltyMember == false)
    return (`Would you like to join our loyalty program?`)
};

