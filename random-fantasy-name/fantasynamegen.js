const firstNames = ['Alaric', 'Alba', 'Alban', 'Anabel', 'Aldo', 'Aquila', 'Ambrose', 'Argenta', 'Anselm', 'Beatrice', 'Archibald', 'Celestina', 'August', 'Clement', 'Baldwin', 'Damiana', 'Balthasar', 'Euphemia', 'Barnabas', 'Gervaise', 'Bartholomew', 'Gisela', 'Benedict', 'Gratiana', 'Cassian', 'Gregoria', 'Castellan', 'Guardia', 'Chapman', 'Guinevere', 'Crispin', 'Gwenllian', 'Cyprian', 'Honora', 'Dunstan', 'Idalia', 'Edmund', 'Idony', 'Everard', 'Laria', 'Ferdinand', 'Lavinia', 'Florian', 'Meliora', 'Frost', 'Mirabel', 'Gavin', 'Pacifica', 'Giles', 'Petra', 'Godfrey', 'Regina', 'Godric', 'Savia', 'Hugh', 'Sigrid', 'Ivar', 'Thora', 'Ivo', 'Viola', 'Leopold', 'Winifred', 'Lucian', 'Maxim', 'Milo', 'Neville', 'Otto', 'Palmer', 'Peregrine', 'Quentin', 'Rudolf', 'Sebastian', 'Severin'],
    middleNames = ['Lucius', 'Marcus', 'Castor', 'Timon', 'Julius', 'Titus', 'Atia', 'Octavia', 'Vorena', 'Servilia', 'Merula', 'Maximus', 'Commodus', 'Proximo', 'Marcus', 'Gracchus', 'Falco', 'Quintus', 'Hagen', 'Cassius', 'Cicero', 'Tigris', 'Aurelia', 'Auriol', 'Livia', 'Vita', 'Antonia', 'Drusilla', 'Mariana', 'Romulus', 'Rufus', 'Brutus', 'Cassian', 'Claudius', 'Felix', 'Triopas', 'Achilles', 'Nestor', 'Menelaus', 'Hector', 'Paris', 'Ajax', 'Helen', 'Polydora', 'Thetis', 'Andromache', 'Briseis', 'Accalia', 'Spartacus', 'Ashur', 'Agron', 'Lugo', 'Nasier', 'Lucretia', 'Mira', 'Naevia', 'Sura', 'Aurelia', 'Noah', 'Jacob', 'Isaiah', 'Gideon', 'Gabriel', 'Eve', 'Elisha', 'Delilah', 'Dinah', 'Abigail'],
    prepositionsSinguler = ['Of', 'Of The', 'The', 'Decider Of', 'King', 'The Fallen', 'Right Hand', 'Hand Of', 'The Hand Of'],
    prepositionsPlural = ['Banisher Of', 'Master Of','Slayer Of', 'Decider Of', 'King Of', 'Breaker Of', 'The Hand Of'],
    lastNamesSingular = ['Knight', 'Dawn', 'Bard', 'Ninja', 'Night', 'Tower', 'Archer', 'Guardian', 'Fate', 'Heaven', 'Mage', 'Wizard', 'Dragon', 'Element'],
    lastNamesPlural = ['Knights', 'Bards', 'Ninjas', 'Nights', 'Towers', 'Archers', 'Guardians', 'Fates', 'Heavens', 'Mages', 'Wizards', 'Dragons', 'Elements', 'Chains'],
    button = document.getElementById('btn');

function generateFirstNames() {
    const firstName = generateRandomName(firstNames);
    const middleName = generateRandomName(firstNames);
    document.getElementById("first").innerHTML = firstName;
    document.getElementById("middle").innerHTML = middleName;

    console.log(firstName + ' ' + middleName);
}

function generateLastName() {
    var isPlural = Math.random() < 0.5;
    let prepositions = [];
    let lastName = [];
    let finalName = '';

    if(isPlural) {
        prepositions = prepositionsPlural;
        lastName = lastNamesPlural;
    } else {
        prepositions = prepositionsSinguler;
        lastName = lastNamesSingular;
    }

    finalName = generateRandomName(prepositions) + ' ' + generateRandomName(lastName);

    document.getElementById("last").innerHTML = finalName;
}

function generateRandomName(arr) {
    const randomNum = Math.floor((Math.random() * arr.length));
    console.log(randomNum);
    return arr[randomNum];
}

generateFirstNames();
generateLastName();

btn.addEventListener('click', event => {
    generateFirstNames();
    generateLastName();
  });