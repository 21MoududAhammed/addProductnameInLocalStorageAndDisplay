const getCookieByName = name =>{
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ') ;
    const cookie = cookieParts.find( item => item.includes(name));
    if(cookie){
        const cookieValue = cookie.slice('=')[1]
        return cookieValue;
    }
}
getCookieByName();