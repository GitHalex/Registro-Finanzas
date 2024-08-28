"use strict";
const creditDebit = document.querySelector("#creditDebitSelect");
const toFrom = document.querySelector("#toFromInput");
const amount = document.querySelector("#amountInput");
const details = document.querySelector("#details");
const sendEmail = document.querySelector("#sendEmail");
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const transaction = {
        creditDebit: creditDebit.value,
        toFrom: toFrom.value,
        amount: amount.valueAsNumber,
        details: details.value,
        sendEmail: sendEmail.checked,
    };
    renderTransaction(transaction);
    console.log(creditDebit.value, toFrom.value, amount.value, details.value, sendEmail.checked);
});
console.log(toFrom.value);
// [] crear un objeto, transcation
// [] interface, 'TranscationInterface'
// [] funcion que tome una transactioInterface
// [] funcion renderice la informacion de ese transaction en la tabla
const renderTransaction = (t) => {
    const tableRow = document.createElement("tr");
    const creditDebitData = document.createElement("td");
    creditDebitData.innerHTML = t.creditDebit;
    const toFromData = document.createElement("td");
    toFromData.innerHTML = t.toFrom;
    const amountData = document.createElement("td");
    amountData.innerHTML = t.amount.toString();
    const detailsData = document.createElement("td");
    detailsData.innerHTML = t.details;
    tableRow.append(creditDebitData);
    tableRow.append(toFromData);
    tableRow.append(amountData);
    tableRow.append(detailsData);
    const tBody = document.querySelector("tbody");
    tBody.prepend(tableRow);
};
