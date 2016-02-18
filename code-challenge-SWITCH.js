// Example of a function that produces the plural version of a noun if the number is more than 1 using a switch statement.

function pluralize (noun, number) {
    if (number === 1){
        console.log(1 + " " + noun);
    } else {
        switch (noun) {
            case "mouse":
                console.log(number + " mice");
                break;
                
            case "goose":
                console.log(number + " geese");
                break;
                
// HERE I added multiple words that share the same pluralizing rules together in order to run the same case code.
// EDIT: I corrected the syntax for multiple cases that share the same rule to be correct for switch.
            case "sheep":
            case "cod":
            case "deer":
                console.log(number + " " + noun);
                break;
                    
            case "knife":
                console.log(number + " knives");
                break;
                    
// These two words seem to share the same rule. Could they be joined too? What would that require? Maybe a .join(), .splice(),
// or a .split()?
            case "man":
                console.log(number + " men");
                break;
                    
            case "woman":
                console.log(number + " women");
                break;
                    
            default:
                console.log(number + " " + noun + "s");
        }
    }
}
