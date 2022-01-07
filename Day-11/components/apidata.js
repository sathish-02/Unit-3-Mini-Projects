async function getapi(url){
    try {
        var res = await fetch(url);
        var data = await res.json();
        return data
    } catch (error) {
        return error
    }
}

export default getapi;