btnCalc.addEventListener("click", exchangeRate, false);

function exchangeRate(e) {
    var rates = [];
    var dates = [];
    var startDate = new Date(sdate.value);
    var endDate = new Date(edate.value);
    const ONEDAY = 24 * 3600 * 1000;
    const chartTitle = `${currency.value}/UAH Exchange Rate`;

    if ((startDate > new Date()) || (endDate > new Date())) {
        return;
    }

    if (endDate < startDate) {
        return;
    }
    var diff = (endDate - startDate) / ONEDAY;
    var currDate;
    let i = 0;
    while (i <= diff) {
        currDate = new Date(startDate.valueOf() + (i * ONEDAY));
        i++;
        if ((currDate.getDay() === 6) || (currDate.getDay() === 0)) {
            continue;
        }
        dates.push(dateToStringNBU(currDate));
        getRateByDate(currency.value, dateToStringNBU(currDate), rates);
    }

    async function getRateByDate(currency, cdate, arr) {
        const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";
        var URI = `${BASE_URL}${currency}&date=${cdate}&json`;
        const result = await fetch(URI);
        const data = await result.json();
        arr.push(data[0].rate);
        await
            Highcharts.chart('result', {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: chartTitle
                },
                subtitle: {
                    text: 'Source: bank.gov.ua'
                },
                xAxis: {
                    categories: dates
                },
                yAxis: {
                    title: {
                        text: 'Курс UAH'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: currency.value,
                    data: rates
                }]
            });
    }
};

function dateToStringNBU(dateObj) {
    function add0(value) {
        return (value.toString().length < 2) ? `0${value}` : value.toString();
    }
    if (dateObj instanceof Date) {
        return `${dateObj.getFullYear()} ${add0(dateObj.getMonth() + 1)} ${add0(dateObj.getDate())}`;
    }
    return false;
}