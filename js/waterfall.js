/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

    /**
     * 
     */
    var demoContent = [
		{
		demo_link: 'https://cadsalud.github.io/2017/01/24/mortalidad_infantil/',
		img_link: 'https://cadsalud.github.io/images-post/who_indicators.png',
		code_link: 'https://cadsalud.github.io/2017/01/24/mortalidad_infantil/',
		title: 'Mortalidad infantil y el subregistro administrativo',
		core_tech: 'R',
		description: 'Con el propósito de contar con indicadores estandarizados para ubicar el estado de salud de una población, la Organización Mundial de la Salud...'
		},{
		demo_link: 'https://cadsalud.github.io/2016/10/21/marihuana_mexico/',
		img_link: 'https://cadsalud.github.io/images-post/todoloque.png',
		code_link: 'https://cadsalud.github.io/2016/10/21/marihuana_mexico/',
		title: 'Todo lo que siempre quiso saber sobre la marihuana en México y nunca se atrevió a preguntar',
		core_tech: 'R',
		description: 'La legalización en el consumo de la marihuana no es un tema tan simple. Estar a favor o en contra involucra ...'
		},{
		demo_link: 'https://cadsalud.github.io/2016/10/21/marihuana/',
		img_link: 'https://cadsalud.github.io/images-post/afectacio_intolerancia_violencia.png',
		code_link: 'https://cadsalud.github.io/2016/10/21/marihuana/',
		title: 'Marihuana: Afectación, intolerancia y violencia',
		core_tech: 'R',
		description: 'La perversa necesidad de compararse resulta útil para contextualizar los efectos de una droga en la salud ...'
		},{
        demo_link: 'https://cadsalud.github.io/2016/09/13/Familia-Mexicana/',
        img_link: 'https://cadsalud.github.io/images-post/retrato_familias.png',
        code_link: 'https://cadsalud.github.io/2016/09/13/Familia-Mexicana/',
        title: 'Retrato de la Familia Mexicana',
        core_tech: 'R',
        description: 'En respuesta a la iniciativa para evitar restricciones legales que impiden que personas del mismo sexo ...'
	    },{
        demo_link: 'https://cadsalud.github.io/2016/09/13/areas-verdes/',
        img_link: 'https://cadsalud.github.io/images-post/avu.png',
        code_link: 'https://cadsalud.github.io/2016/09/13/areas-verdes/',
        title: 'Áreas verdes urbanas',
        core_tech: 'R',
        description: 'La siguiente infografía muestra algunos datos lamentables que muestran la poca planeación urbana ...'
        },{
        demo_link: 'https://cadsalud.github.io/2016/06/06/Sexualidad/',
        img_link: 'https://cadsalud.github.io/images-post/infografia_sexualidad_img.png',
        code_link: 'https://cadsalud.github.io/2016/06/06/Sexualidad/',
        title: 'Sexualidad: Generación X vs Millennials',
        core_tech: 'R',
        description: 'Los adolescentes tienen una sexualidad activa más temprana, por otro lado, presentan mayores tasas ...'
        },{
        demo_link: 'https://cadsalud.github.io/2016/06/06/Depresion-en-Mexico/',
        img_link: 'https://cadsalud.github.io/images-post/infografia_depresion_img.png',
        code_link: 'https://cadsalud.github.io/2016/06/06/Depresion-en-Mexico',
        title: 'Depresión en México',
        core_tech: 'R',
        description: 'La depresión mayor es un trastorno de alta prevalencia que puede generar discapacidad importante ...'
        }];

    contentInit(demoContent) 
    waitImgsLoad() 
}());



/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
    // var htmlArr = [];
    // for (var i = 0; i < content.length; i++) {
    //     htmlArr.push('<div class="grid-item">')
    //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
    //     htmlArr.push('<img src="'+content[i].img_link+'">')
    //     htmlArr.push('</a>')
    //     htmlArr.push('<h3 class="demo-title">')
    //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
    //     htmlArr.push('</h3>')
    //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
    //     htmlArr.push('<p>'+content[i].description)
    //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
    //     htmlArr.push('</p>')
    //     htmlArr.push('</div>')
    // }
    // var htmlStr = htmlArr.join('')
    var htmlStr = ''
    for (var i = 0; i < content.length; i++) {
        htmlStr +=
            '<div class="grid-item">' +
            '   <a class="a-img" href="' + content[i].demo_link + '">' +
            '       <img src="' + content[i].img_link + '">' +
            '   </a>' +
            '   <h3 class="demo-title">' +
            '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' +
            '   </h3>' +
            '   <p>' + content[i].core_tech + '</p>' +
            '   <p>' + content[i].description +
            '       <a href="' + content[i].code_link + '"> <i class="fa fa-code" aria-hidden="true"></i></a>' +
            '   </p>' +
            '</div>'
    }
    var grid = document.querySelector('.grid')
    grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img')
    var totalImgs = imgs.length
    var count = 0
        //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                // alert('onload')
                count++
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid()
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid()
    }
}

/**
 * 
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20,
    })
}


