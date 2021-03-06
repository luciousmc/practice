

function changeElements(){
    let elements = $('.numConvert, .otherConvert');

    const key = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0
    };

    $.each(elements, (index, element) => {
        $element = $(element);
        const text = $element.text();

        $element.text(key[text])
    });

}

function appendTextToElement(className, text) {
    const element = $(className);

    element.append(text);
}

function addClass(element, className){
    $element = $(element);
    $element.addClass(className);
    return $element.length;
}

function removeElements(element){
    $element = $(element);
    $element.remove();
}

