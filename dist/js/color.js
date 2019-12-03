setColor()

function changeColor() {

    var currentColor = localStorage.getItem('dd-svdecor-color-scheme');

    if(currentColor == 'white') setColor('dark')
    else if(currentColor == 'dark') setColor('white')

}

function setColor(colorMode) {

    var mainContainer = document.getElementById('__dd-body')

    var elements = document.getElementsByClassName('dd-svdecor-color-scheme');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    var theme = colorMode || localStorage.getItem('dd-svdecor-color-scheme');

    if(!theme || (theme != 'white' && theme != 'dark')) theme = 'dark';

    localStorage.setItem('dd-svdecor-color-scheme', theme);

    var link = document.createElement('link')
    link.rel = 'stylesheet';
    link.id = theme;
    link.className = 'dd-svdecor-color-scheme';

    var classList = mainContainer.classList;
    classList.remove('is--white');
    classList.remove('is--dark');

    if(theme == 'white') {
        link.href = styles.white;

        mainContainer.classList.add('is--white')
    }
    else if (theme == 'dark') {
        link.href = styles.dark;
        mainContainer.classList.add('is--dark')
    }

    document.head.append(link);

    var imageBlocks = document.querySelectorAll('img.__dd-img-c')

    for(var i = 0; i < imageBlocks.length; i++) {
        var thisName = imageBlocks[i].getAttribute('src').replace('.dark', '').replace('.white', '')
        var thisArr = thisName.split('.')

        imageBlocks[i].setAttribute('src', thisArr[0] + '.' + theme + '.' + thisArr[1])

    }

}