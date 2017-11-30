var yourNamevar = prompt("Enter Your Name please :");
    yourName.innerHTML = ("Hallo " + yourNamevar);

function myFunction() {
    "use strict"; 

var Age = document.getElementById('input').value,

    R1 = Age * 12,
    R2 = Age * 365,
    R3 = R2 * 24,
    R4 = R2 * 8,
    R5 = R2 * 0.5,
    R6 = R3 *60,
    M = document.getElementById('M'),
    D = document.getElementById('D'),
    H = document.getElementById('H'),
    MI = document.getElementById('MI'),
    S = document.getElementById('S'),
    WC = document.getElementById('WC'),
    
    Messag = document.getElementById('Sorry');
    
    if (Age < 16) {
        
        Messag.innerHTML = "Sorry, you are not in this course";
        M.innerHTML = ('-');
        D.innerHTML = ('-');
        H.innerHTML = ('-');
        MI.innerHTML = ('-');
        S.innerHTML = ('-');
        WC.innerHTML = ('-');   
       
	} else if (Age > 45) {

		Messag.innerHTML = "Sorry, you are not in our course";
        M.innerHTML = ('-');
        D.innerHTML = ('-');
        H.innerHTML = ('-');
        MI.innerHTML = ('-');
        S.innerHTML = ('-');
        WC.innerHTML = ('-');   
       
	} else {

        M.innerHTML = (R1);
        D.innerHTML = (R2);
        H.innerHTML = (R3);
        MI.innerHTML = (R6);
        S.innerHTML = (R4);
        WC.innerHTML = (R5); 
         
	}}

