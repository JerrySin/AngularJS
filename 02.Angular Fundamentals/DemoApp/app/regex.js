
$(document).ready(function () {
    // var source = $('div.row').html();

    // // remove commented code from 
    // var rexComment = /<!--(.*?)-->/gi;
    // var rexAttribute = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi;

    // //source = source.replace(rexComment);

    // var matches = source.match(rexComment);
    // $.each(matches,function(){
    //     console.log($(this));
    // });

    var currentURL = location.href;
    
    function isSelectedUrls(currentURL) {

        var regex = new RegExp(/^https:\/\/www.rogers.com\/consumer/, 'i');
        return regex.test(currentURL);
      /*** your JavaScript Codes Here ****/
    }
    
});


// $(function () {
//     var textFixer = /(?:a)(?:b(.*?)c)+(?:d)/i;
//     text = text.replace(textFixer, function($0, $1){
//         var numbers = "";
//         $.each($1, function () {
//             numbers += this;
//         });
//         alert(numbers);
//         return numbers;
//     });
//     alert(text);
// });

Selected URLs:
•	www.rogers.com/consumer/home 
•	www.rogers.com/consumer/home-monitoring
•	www.rogers.com/consumer/bundle
•	www.rogers.com/consumer/easyloginriverpage
Example:
isSelectedUrls(‘https://www.rogers.com/consumer/home’); // true
isSelectedUrls(‘https://www.rogers.com/consumer/easyloginriverpage’); // true
isSelectedUrls(‘ https://www.rogers.com/business’); // false
Answer: (Please expand the text area if needed.)


var currentURL = location.href;

function isSelectedUrls(currentURL) {

    var regex = new RegExp('/https:\/\/www.rogers.com\/consumer\//', 'i');
    return string.test(regex);
  /*** your JavaScript Codes Here ****/
}
