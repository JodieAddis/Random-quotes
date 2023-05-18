const quotes = async () => {
    try{
        let api = await fetch("https://thatsthespir.it/api");
        let res = await api.json(); 
        console.log(res); 
        let quote = await res.quote ; 
        let picture = await res.photo;
        let author = await res.author; 
        document.querySelector('.quotes_author_img').src = picture; 
        document.querySelector('.quotes_display_text').innerHTML=quote; 
        document.querySelector('.quotes_display_author').innerHTML=author; 
    } catch {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fail to load quotes',
        })
    }
}

quotes(); 
