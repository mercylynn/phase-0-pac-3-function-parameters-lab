function introduction(name){
    console.log(`Hi, my name is ${name}.`)
}
function introductionWithLanguage(name,language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(name,language="Javasript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(name,language="Javasript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introduction("Aki");
introductionWithLanguage("Aki","Ember.js");
introductionWithLanguageOptional("Gracie");
introductionWithLanguageOptional("Gracie","Python");