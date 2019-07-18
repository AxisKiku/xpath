var HREF_TEMPLATE = "href='[0]'",
    ID_TEMPLATE = "id='[0]'",
    CLASS_TEMPLATE = "class='[0]'";

function _getXPathFormat(e) {
    var format;

    if (e.target.id !== undefined && e.target.id !== "")
        format = ID_TEMPLATE.replace("[0]", e.target.id);
    else if (e.target.pathname !== undefined && e.target.pathname !== "")
        format = HREF_TEMPLATE.replace("[0]", e.target.pathname);
    else
        format = CLASS_TEMPLATE.replace("[0]", e.target.className);

    return format;
}

$(document).click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var xPath = "$x(\"//*[@[0]]\")".replace("[0]", _getXPathFormat(e));

    console.log(xPath);
});


// var script = document.createElement('script');
// script.src = '/xpath.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
