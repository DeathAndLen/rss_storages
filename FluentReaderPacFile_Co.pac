var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+FluentReaderPAC", {
    "+FluentReaderPAC": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)v2ex\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)feedx\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)shab\.fun$/.test(host)) return "+proxy";
        if (/(?:^|\.)rsshub\.app$/.test(host)) return "+proxy";
        if (/(?:^|\.)ycombinator\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)aiweekly\.co$/.test(host)) return "+proxy";
        if (/(?:^|\.)deephunt\.in$/.test(host)) return "+proxy";
        if (/(?:^|\.)becominghuman\.ai$/.test(host)) return "+proxy";
        if (/(?:^|\.)gizmodo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ctovision\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)theverge\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)techcrunch\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gigaom\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)bbci\.co\.uk$/.test(host)) return "+proxy";
        if (/(?:^|\.)ftchinese\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)feedx\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)hket\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:7891; SOCKS 127.0.0.1:7891";
    }
});
