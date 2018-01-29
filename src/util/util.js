var util = util || {};

// cookie
util.getCookie =  function () {
    var cookie = {};
    var all = document.cookie;
    if (all === '')
        return cookie;
    var list = all.split('; ');
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}

util.setCookie = function (name, value, expires, path, domain, secure) {
    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires)
        cookie += '; expires=' + expires.toGMTString();
    if (path)
        cookie += '; path=' + path;
    if (domain)
        cookie += '; domain=' + domain;
    if (secure)
        cookie += '; secure=' + secure;
    document.cookie = cookie;
}


//移除cookie
util.removeCookie = function  (name, path, domain) {
    document.cookie = name + '='
        + '; path=' + path
        + '; domain=' + domain
        + '; max-age=0';
}
util.delclass = function (node,classname) {
    if (node.nodeType == 1) {
        if (node.className.indexOf(classname) > -1)
            node.className = node.className.replace(classname, "");
    }
}

util.addclass = function (node, classname) {
    if (node.nodeType == 1) {
        if (node.className.indexOf(classname) == -1)
            node.className += " " + classname;
    }
}

util.extend = function (o1,o2) {
    for(var i in o2 ){
        if(o1.i == undefined){
            o1.i  = o2.i;
        }
    }

}

export {util};
