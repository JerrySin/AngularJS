// $(document).ready(function () {
//     $("#click").click(function () {
//         var input = $("#value").val();
//         //console.log(input);
//         if (input % 2 === 0) {
//             $(".output").css('color', 'red').text(input + ' is even');
//         } else {
//             $(".output").css('color', 'blue').text(input + ' is odd');
//         }
//     });
// });

// the number of days between “Date 1” and “Date 2”, and the result is assigned to s.eVar24. 
// Your codes should produce the expected value of s.eVar24 for case A, B, C and D.  
// Calculation Formula: Date 2 – Date 1 
// Date Format: DD/MM/YYYY
// Data Type of s.eVar24: String


// •	Date1 = Today’s date 
// •	Date2 = Today’s date
// •	s.eVar24 = “0”;
// Case B:
// •	Date1 = “05/03/2018”
// •	Date2 = “05/04/2018”
// •	s.eVar24 = “31”;
// Case C:
// •	Date1 = “05/03/2018”
// •	Date2 = “05/02/2018”
// •	s.eVar24 = “-28”;
// Case D:
// •	Date1 = “10/12/2018”
// •	Date2 = “12/12/2018”
// •	s.eVar24 = “2”;

var s = {};

/*** your JavaScript Codes Here ****/
var data = [
    {
        'Date1': new Date(),
        'Date2': new Date()
    },
    {
        'Date1': new Date('05/03/2018'),
        'Date2': new Date('05/04/2018')
    },
    {
        'Date1': new Date('05/03/2018'),
        'Date2': new Date('05/02/2018')
    },
    {
        'Date1': new Date('10/12/2018'),
        'Date2': new Date('12/12/2018')
    }
]

function calcuteDays(dates) {
    var oneDay = 24 * 60 * 60 * 1000;
    for (var i=0; i<dates.length; i++) {
        s.eVar24 = Math.round((dates[i].Date2.getTime() - dates[i].Date1.getTime()) / (oneDay)).toString();
        //document.write(s.eVar24 + '<br />');
    }
}

calcuteDays(data);



// var arr1 = ["a", "b", "c"];
// var arr2 = ["b", "c", "d"];

// function difference(arr1, arr2) {

//     /*** your JavaScript Codes Here ****/
//     var result = [];
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             result.push(arr1[i]);
//         }
//     }
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) === -1) {
//             result.push(arr2[i]);
//         }
//     }
//     return result;
// }

// function difference(arr1, arr2) {

//     /*** your JavaScript Codes Here ****/
//     var temp = concat(arr1, arr2);
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             result.push(arr1[i]);
//         }
//     }
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) === -1) {
//             result.push(arr2[i]);
//         }
//     }
//     return result;
// }

// var currentURL = location.href;

// function isSelectedUrls(currentURL) {
//     /*** your JavaScript Codes Here ****/

//     var regex = new RegExp('/^https:\/\/www.rogers.com\/consumer\//', 'i');
//     return regex.test(currentURL);
// }