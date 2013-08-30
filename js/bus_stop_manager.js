window.onerror = handleErr;
onerror = handleErr;

function handleErr(msg, url, l) {
    var txt = "msg=" + msg + "\n";
    txt += "url=" + url + "\n";
    txt += "line=" + l;
    Debug(txt);
    return true;
}


function Debug(msg) {
    var element = $("#debug");
    if (element.text == "") {
        element.append(msg);
    } else {
        element.prepend(msg + "<br />");
    }
}

$(init);

function handleShopDrop(event, ui) {
    ui.draggable.position({ of: $(this), my: 'center bottom', at: 'center bottom-5' });
}

function handleScreenAccept(ui) {
    //Must forfill '#shops div'
    if (ui.hasClass("ui-draggable") &&!ui.attr("attached")) {
            return true;
    }
    return false;
}

function init() {
    // Commence doing the crazy stuffs!!
    $('#debug').dialog({ position: { my: "right-100 bottom-100", at: "right bottom", of: window} });

    // Create screens before populating them with shop details
    var screens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (var i = 0; i < screens.length; i++) {
        $('<div>Screen ' + screens[i] + '</div>')
            .data('number', screens[i])
            .attr('id', 'screen' + screens[i])
            .appendTo('#screens')
            .addClass("ui-widget-header")
            .droppable({ accept: '#shops div', hoverClass: 'ui-state-hover', drop: handleShopDrop });
    }

    function handleShopReturn(event, ui) {
        ui.draggable.attr("style", "position: relative;");
        ui.draggable.attrRemove("attached");
    }

    $("#shops").droppable({ accpt: '#shop div', drop: handleShopReturn });

    var shops = [["01", "Windermere", "Blue"],
        ["02", "York", "Blue"],
        ["03", "Guildford", "Blue"],
        ["04", "", "Blue"],
        ["05", "", "Blue"],
        ["06", "", "Blue"],
        ["08", "Edinburgh", "Blue"],
        ["07", "", "Blue"],
        ["09", "", "Blue"],
        ["10", "Chester", "Blue"],
        ["11", "", "Blue"],
        ["12", "", "Blue"],
        ["13", "", "Blue"],
        ["14", "", "Blue"],
        ["15", "", "Blue"],
        ["16", "", "Blue"],
        ["17", "", "Blue"],
        ["18", "Bluewater", "Blue"],
        ["19", "", "Blue"],
        ["20", "Glassgow", "Blue"],
        ["21", "", "Blue"],
        ["22", "", "Blue"],
        ["23", "", "Blue"],
        ["24", "", "Blue"],
        ["25", "", "Blue"],
        ["26", "Handforth", "Blue"],
        ["27", "", "Blue"],
        ["28", "Perth", "Blue"],
        ["29", "", "Blue"],
        ["30", "", "Blue"],
        ["31", "", "Blue"],
        ["32", "", "Blue"],
        ["33", "", "Cage"],
        ["34", "Bath", "Blue"],
        ["35", "", "Blue"],
        ["36", "", "Blue"],
        ["38", "", "Blue"],
        ["37", "", "Blue"],
        ["39", "Liverpool", "Blue"],
        ["40", "", "Blue"],
        ["41", "", "Blue"],
        ["42", "", "Blue"],
        ["43", "", "Blue"],
        ["44", "", "Blue"],
        ["45", "", "Blue"],
        ["46", "Belfast", "Blue"],
        ["47", "", "Blue"],
        ["48", "", "Blue"],
        ["49", "", "Blue"],
        ["50", "", "Blue"],
        ["51", "", "Blue"],
        ["52", "", "Blue"],
        ["53", "", "Blue"],
        ["54", "", "Blue"],
        ["55", "", "Blue"],
        ["56", "", "Blue"],
        ["57", "", "Blue"],
        ["58", "", "Blue"],
        ["59", "", "Blue"],
        ["60", "", "Blue"],
        ["61", "", "Blue"],
        ["62", "", "Blue"],
        ["63", "Enniskillen", "Blue"],
        ["64", "", "Blue"],
        ["65", "", "Blue"]];

    for (store in shops) {
        $('<div>' + shops[store][0] + '<br />' + shops[store][1] + '<br />' + shops[store][2] + '</div>')
            .data('number', shops[store][0])
            .attr('id', 'shop' + shops[store][0])
            .appendTo('#shops')
            .addClass('ui-widget-content')
            .draggable({
                revert: "invalid",
                cursor: 'move' });
    }
};
