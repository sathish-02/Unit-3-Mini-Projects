
async function getApi(url){
    try {
        var res = await fetch(url);
        var data = await res.json();
        var food = data.categories;
        return food;
    } catch (error) {
        
    }
    
}

function appendData(data,location){
    data.map((el)=>{
        let {strCategory,strCategoryDescription,strCategoryThumb} = el;

        var div = document.createElement("div");
        var image = document.createElement("img");
        image.src = strCategoryThumb;
        var cate = document.createElement("h2");
        cate.textContent=strCategory;
        var p = document.createElement("p");
        p.textContent=strCategoryDescription;

        div.append(image,cate,p);
        location.append(div);
    })

}

function appendDatas(data,location){
    data.map((el)=>{
        let {strMeal,strMealThumb} = el;

        var div = document.createElement("div");
        var image = document.createElement("img");
        image.src = strMealThumb;
        var cate = document.createElement("h2");
        cate.textContent=strMeal;
       
        div.append(image,cate);
        location.append(div);
    })

}

export {getApi,appendData,appendDatas};