function isSimilar(str, st) {
    str = str?.toLowerCase();
    st = st?.toLowerCase();

    common = 0;
    for (let i = 0; i < Math.min(str.length, st.length); i++) {
        if (str[i] === st[i]) {
            common++;
        };
    };
    return common / (str.length + st.length - common);
};

module.exports = { isSimilar };