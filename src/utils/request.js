const request = (url, args = null) => {
    if(args) url += "?";
    for(const key in args) {
        url += `${key}=${args[key]}&`;
    }
    
    if(url[url.length - 1] === '&') url = url.slice(0, -1);
    console.log(url);
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                resolve(json);
            })
            .catch(err => {
                reject(err);
            });
    })
}

export default request;