export  const escape = (str) => {
    return str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
};