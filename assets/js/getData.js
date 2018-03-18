let data;
$(document).ready(function () {
    $.get('http://www.vocmontoyo.com/rdata.ashx?i=045&n=10').then(function (res) {
       data = res;
    });
});

exports.data = data;