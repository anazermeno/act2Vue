var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Lista de ciudades en Mexico que deberias visitar!!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message: "Puerto Vallarta" },
            { message: "Cancun" },
            { message: "Guadalajara" },
            { message: "Tepic" },
            { message: "Monterrey" },
            { message: "Oaxaca" },
            { message: "Guanajuato" },
            { message: "San Luis Potosi" },
            { message: "Michoacan" },
            { message: "Durango" },
            { message: "Chiapas" },
            { message: "Guerrero" },
            { message: "Zacatecas" },
        ]
    }
});

var app3 = new Vue({
    el:'#app-3',
    data: {
        pasatiempo: GetRandomRequest()
    }
});

function GetRandomImage(){
    let picturePath = ''
    let imageBank = ['http://www.balneariosmexico.com/IMG/arton3388.jpg','https://visitapuertovallarta.com.mx/uploads/static/visit-puerto-vallarta.jpg','https://inmobiliare.com/himalaya/wp-content/uploads/2020/07/oaxaca_1.jpg','https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/07/Catedral-_Plaza-de-armas-scaled.jpg','https://topadventure.com/__export/1616006885906/sites/laverdad/img/2021/03/17/top_5_de_lugares_para_conocer_en_michoacanx_crop1616004865125.jpg_328301815.jpg','https://www.cancunadventure.net/images/puntacancun-airview.jpg']
    picturePath += imageBank[Math.floor(Math.random()* imageBank.length)]
    return picturePath
}

function GetRandomRequest(){
    let request = ''
    let requestBank = ['Ciudad favorita','De donde eres','Ciudad mas bonita']
    request += requestBank[Math.floor(Math.random()* requestBank.length)]
    return request
}

var app4 = new Vue({
    el:'#app-4',
    data: {
        showImage: false,
        imag: GetRandomImage()
    },
});

var app5 = new Vue({
    el:'#app-5',
    data: {
        name: 'Ana Lizbeth Zermeno Torres',
        matricula: 'A00824913',
        titulo: 'Lugares Turisticos'
    }
});