btnCalc.addEventListener("dbclick", exchageRate_e, false);

function exchageRate_e() {
    var XHR = new XMLHttpRequest();
    var BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";
    var date = edate.value.split("-").join("");
    var URI = `${BASE_URL}${currency.value}&date=${date}&json`;
    XHR.open("GET", URI);
    XHR.send();
    XHR.addEventListener("readystatechange", function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            var data = JSON.parse(XHR.responseText);
            result_e.innerHTML = `<h2>${data[0].rate}</h2>`;
        }
    }, false);
}
