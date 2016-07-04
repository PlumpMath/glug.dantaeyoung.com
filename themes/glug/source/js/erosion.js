function walk(el, fn) {
    for (var i = 0, len = el.childNodes.length; i < len; i++) {
        var node = el.childNodes[i];
        if (node.nodeType === 3) {
            fn(node);
        } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "DELETED") {
            walk(node, fn);
        }
    }
}

function textNode(txt) {
    return document.createTextNode(txt);
}


function walk_and_replace(elem, repl_char) {

    walk(elem, function(node) {
        var text = node.data.split(repl_char),
            parent = node.parentNode,
            i = 1,
            newNode;

        parent.insertBefore(textNode(text[0]), node);

        for (; i < text.length; i += 1) {
            (newNode = document.createElement("deleted"))
                               .appendChild(textNode(repl_char));
            parent.insertBefore(newNode, node);
            parent.insertBefore(textNode(text[i]), node);
        }
        parent.removeChild(node);
    });
}


function frequency_erosion(replace_num) {
    var freq = "zqxjkvbpygfwmucldrhsnioate";

    _.forEach(freq, function(d, i) {
        if (i < replace_num) {
            walk_and_replace(document.body, freq[i])
        }
    });
}

$(document).ready(function(){ 
    console.log("tryto");

    //frequency_erosion(12);

});


