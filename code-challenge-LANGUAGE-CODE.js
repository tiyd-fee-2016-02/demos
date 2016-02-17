function helloWorld (language){
    switch (language.toLowerCase()){
        case "spanish":
            console.log("Hola Mundo");
            break;

        case "french":
            console.log("Bonjour le monde");
            break;

        case "italian":
            console.log("Ciao mondo");
            break;

        case "korean":
            console.log("안녕하세요, 세계");
            break;

        case "dutch":
            console.log("Hallo Wereld");
            break;

        default:
            console.log("Hello, world");
    }
}

helloWorld("Spanish");
helloWorld("French");
helloWorld("Italian");
helloWorld("Korean");
helloWorld("Dutch");
