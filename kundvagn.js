// const referens = document.querySelector("#referens").value;
// const companyName = document.querySelector("#company_name").value;
// const companyAdress = document.querySelector("#company_adress").value;



const fakturaBtn = document.querySelector(".faktura_button");

const fakturaInfoArray = [];


const taBortButton = document.querySelectorAll(".ta-bort");
for (i = 0; i < taBortButton.length; i++) {
    const deleteBtn = taBortButton[i];
    deleteBtn.addEventListener('click', function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
            // updateCartTotal()
    })
}

// deleteBtn = document.getElementsByClassName('ta-bort')
// for (var i = 0; i < deleteBtn.length; i++) {

//     var button = deleteBtn[i]
//     button.addEventListener('click', () => {
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//             // updateCartTotal()
//     })
// }


// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }



// const faktura = {}


function saveRekord() {
    const referensData = document.querySelector("#referens").value;
    const companyNameData = document.querySelector("#company_name").value;
    const companyAdressData = document.querySelector("#company_adress").value;
    const totalBeloppData = document.querySelector("#total_belopp_amount").textContent;
    const momsInkData = document.querySelector("#ink_moms_amount").textContent;
    var checkBox = document.querySelector("#checkbox").checked;


    const totalBeloppNumber = Number(totalBeloppData);
    const momsInkNumber = Number(momsInkData);



    const faktura = {
        referens: referensData,
        companyName: companyNameData,
        companyAdress: companyAdressData,
        totalBelopp: totalBeloppNumber,
        momsInk: momsInkNumber


    }

    fakturaInfoArray.push(faktura);


    // div to test the flow of data
    /*     const testDiv = document.querySelector('#testDiv');
        testDiv.innerHTML = "<li>Fornamn :" + faktura.referens.toUpperCase() +
            "</li>" + "<li>andranamn :" + faktura.companyName.toUpperCase() + "</li>" +
            "<li> Efternamn: " + faktura.companyAdress + "</li>" +
            "<li> Efternamn: " + faktura.totalBelopp + "</li>" +
            "<li> Efternamn: " + faktura.momsInk + "</li>"; */
    // console.log(faktura)

    if (referensData && companyNameData && companyAdressData && checkBox) {
        // localStorage.clear();
        window.localStorage.setItem('fakturaInfo', JSON.stringify(fakturaInfoArray));
        console.log(fakturaInfoArray);
        location.reload();
        window.location.href = "faktura.html";

        // showing alert individual alert message

    } else if (!referensData && companyNameData && companyAdressData && checkBox) {
        const referens = document.querySelector('.referens_p');

        removeClass(referens, 1500)
    } else if (referensData && !companyNameData && companyAdressData && checkBox) {
        const company_name = document.querySelector('.company_name_p');

        removeClass(company_name, 1500)
    } else if (referensData && companyNameData && !companyAdressData && checkBox) {
        const company_adress = document.querySelector('.company_adress_p');

        removeClass(company_adress, 1500);


    } else if (referensData && companyNameData && companyAdressData && !checkBox) {
        const checkBox = document.querySelector('.checkbox_p');

        removeClass(checkBox, 1500)
    } else {
        /// showing all the alert messages
        const referens = document.querySelector('.referens_p');
        // referens.classList.add('active-alert')
        // setTimeout(() => {
        //     referens.classList.remove('active-alert')
        // }, 1500);

        removeClassWithDelay(referens, 0, 1500)


        const company_name = document.querySelector('.company_name_p');
        removeClassWithDelay(company_name, 150, 1650)
            /*         setTimeout(() => {
                        company_name.classList.add('active-alert')
                    }, 150);
                    setTimeout(() => {
                        company_name.classList.remove('active-alert')
                    }, 1650); */

        const company_adress = document.querySelector('.company_adress_p');
        removeClassWithDelay(company_adress, 300, 1800)
            /*         setTimeout(() => {
                        company_adress.classList.add('active-alert')
                    }, 300);
                    setTimeout(() => {
                        company_adress.classList.remove('active-alert')
                    }, 1800);
             */
        const checkBox = document.querySelector('.checkbox_p');
        removeClassWithDelay(checkBox, 450, 1950)
            /*         setTimeout(() => {
                        checkBox.classList.add('active-alert')
                    }, 450);
                    setTimeout(() => {
                        checkBox.classList.remove('active-alert')
                    }, 1950); */
    }




    /*     else {
            const alertParagraph = document.getElementsByClassName('alert')
            for (i = 0; i < alertParagraph.length; i++) {
                alert = alertParagraph[i]
                alert.classList.add('active-alert')

                setTimeout(() => {
                    alert.classList.remove('active-alert')
                }, 3000);

                // removeClass()
            }
        } */
}


/* function removeClass() {
    for (i = 0; i < alertParagraph.length; i++) {
        alert = alertParagraph[i]
        setTimeout(() => {
            alert.classList.remove('active-alert')

        }, 2000);
    }
} */

/* function removeClass(el) {
    el.classList.add('active-alert')
    setTimeout(() => {
        el.classList.remove('active-alert')
    }, 1500);
} */

function removeClass(el, tid) {
    el.classList.add('active-alert')
    setTimeout(() => {
        el.classList.remove('active-alert')
    }, tid);
}

function removeClassWithDelay(el, delaytime, time) {
    setTimeout(() => {
        el.classList.add('active-alert')
    }, delaytime);
    setTimeout(() => {
        el.classList.remove('active-alert')
    }, time);
}
fakturaBtn.addEventListener("click", saveRekord);