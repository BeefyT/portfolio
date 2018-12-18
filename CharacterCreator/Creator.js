

function showInputRace() {
    var x = document.getElementById("race").value;

    if (x == "dwarf") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to con, darkvision, dwarven resilience, and dwarven combat training";
    }
    else if (x == "elf") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to dex, darkvision, keen sense, and fey ancestry";
    }
    else if (x == "halfling") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to dex, lucky, brave, and halfling nimbleness";
    }
    else if (x == "human") {
        document.getElementById("displayRace").innerHTML = "You get a +1 to all abilities";
    }
    else if (x == "dragonborn") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to str, +1 to con, breath weapon, and damage resistance";
    }
    else if (x == "gnome") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to int, darkvision, and gnome cunning";
    }
    else if (x == "halfelf") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to chr, darkvision, and fey ancestry";
    }
    else if (x == "halforc") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to str, +1 to con, darkvision, menacing, relentelss endurance, and savage attack";
    }
    else if (x == "tiefling") {
        document.getElementById("displayRace").innerHTML = "You get a +2 to chr, +1 to int, darkvision, hellish resistance, and infernal legacy";
    }
}

function showInputBackground() {
    var x = document.getElementById("background").value;

    if (x == "acolyte") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Insight, religion";
    }
    else if (x == "charlatan") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Deception, sleight of hand, disguise kit, forgery kit";
    }
    else if (x == "criminal") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Deception, stealth, one gaming set, thieves tools";
    }
    else if (x == "entertainer") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Acrobatics, performance, disguise kit, one musical instrument";
    }
    else if (x == "folkhero") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Animal handling, survival, one artisan tool, land vehicles";
    }
    else if (x == "guildartisan") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Insight, persuasion, one artisan tool";
    }
    else if (x == "hermit") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Medicine, religion, herbalism kit";
    }
    else if (x == "noble") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: History, persuasion, one gaming set";
    }
    else if (x == "outlander") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Athletics, survival, one musical instrument";
    }
    else if (x == "sage") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Arcana, history";
    }
    else if (x == "sailor") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Athletics, perception, navigator's tools, water vehicles";
    }
    else if (x == "soldier") {
        document.getElementById("displayBackground").innerHTML = "Proficiencies: Athletics, intimidation, one gaming set, land vehicles";
    }
}

function showInputClass() {
    var x = document.getElementById("heroClass").value;

    if (x == "barbarian") {
        document.getElementById("showData").innerHTML = barbarianJson().value;
    }
    else if (x == "bard") {
        document.getElementById("showData").innerHTML = bardJson().value;
    }
    else if (x == "cleric") {
        document.getElementById("showData").innerHTML = clericJson().value;
    }
    else if (x == "druid") {
        document.getElementById("showData").innerHTML = druidJson().value;
    }
    else if (x == "fighter") {
        document.getElementById("showData").innerHTML = fighterJson().value;
    }
    else if (x == "monk") {
        document.getElementById("showData").innerHTML = monkJson().value;
    }
    else if (x == "paladin") {
        document.getElementById("showData").innerHTML = paladinJson().value;
    }
    else if (x == "ranger") {
        document.getElementById("showData").innerHTML = rangerJson().value;
    }
    else if (x == "rogue") {
        document.getElementById("showData").innerHTML = rogueJson().value;
    }
    else if (x == "sorcerer") {
        document.getElementById("showData").innerHTML = sorcererJson().value;
    }
    else if (x == "warlock") {
        document.getElementById("showData").innerHTML = warlockJson().value;
    }
    else if (x == "wizard") {
        document.getElementById("showData").innerHTML = wizardJson().value;
    }
}

function getSum(total, num) {
    return total + num;
}

function rollStats(button) {

    var btn = button.id;

    var diceRolls = [];

    //Roll Dice 4 times into an array
    for (i = 0; i < 4; i++) {
        var roll = Math.floor((Math.random() * 6) + 1);
        console.log(roll);
        diceRolls.push(roll);
    }

    //After rolled remove lowest number in array
    var diceRollscopy = diceRolls.slice();
    var min = diceRolls[0]
    diceRolls.forEach(function (val) {
        if (val <= min) {
            min = val
        }
        console.log(min)
    })
    var smallest = diceRolls.indexOf(min)
    diceRollscopy.splice(smallest, 1);
    console.log(diceRollscopy)
    console.log(diceRolls)

    //Add new array
    var sum = 0;
    for (var i = 0; i < diceRollscopy.length; i++) {
        sum += diceRollscopy[i]
    }

    //Now add the array numbers together
    if (btn == "strBtn") {
        document.getElementById("str").innerHTML = sum;
    }
    else if (btn == "dexBtn") {
        document.getElementById("dex").innerHTML = sum;
    }
    else if (btn == "conBtn") {
        document.getElementById("con").innerHTML = sum;
    }
    else if (btn == "intBtn") {
        document.getElementById("int").innerHTML = sum;
    }
    else if (btn == "wisBtn") {
        document.getElementById("wis").innerHTML = sum;
    }
    else if (btn == "chrBtn") {
        document.getElementById("chr").innerHTML = sum;
    }

    diceRolls = [];
    diceRollscopy = [];
}



