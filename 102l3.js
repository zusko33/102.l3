
let first = prompt("Ile jesz posilkow dziennie?", "1")

if (first < 2) {
    alert("O WOW to chyba przeprowadzasz tez fotosynteze :)");
} else if (first == 2) {
    let second = prompt("1 = sniadanie i obiad czy 2 = obiad i kolacje?", "1"); 
        if (second == 1) {
            alert("mniam sniadania to jest to");
        } else if (second == 2) {
            alert("tylko nie jedz za pozno ;)");
        } else {
            alert("You are crazy");
        } 
}
else {
    let third = prompt("3 czy wiecej?", "4");
    if (third == 3) {
        alert("BRAWO");
    } else {
        alert("MASA = SILA dziku")
    }
}




        