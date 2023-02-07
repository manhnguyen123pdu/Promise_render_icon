function fetchData(){
    let dataInput =document.querySelector('.searchInput').value;
    return axios({
        url:`http://api.giphy.com/v1/gifs/search?q=${dataInput}&api_key=q3ec6azh8m0i5yhIzVLTvxUcCDBDvpi0`,
        method:'GET'
    })
    .then((res)=>{
        display(res.data.data[1].images.original.url)
    })
}
function display(dataImg){
    let tagImg=document.createElement('img');
    tagImg.src=dataImg;
    tagImg.setAttribute('class',"col-3 mt-3")
    document.querySelector(".showScreen").append(tagImg);
}
function deleteContent(){
    document.querySelector(".showScreen").innerHTML=""
}


