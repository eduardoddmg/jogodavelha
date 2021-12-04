var btn1 = document.getElementById('1');
var btn2 = document.getElementById('2');
var btn3 = document.getElementById('3');
var btn4 = document.getElementById('4');
var btn5 = document.getElementById('5');
var btn6 = document.getElementById('6');
var btn7 = document.getElementById('7');
var btn8 = document.getElementById('8');
var btn9 = document.getElementById('9');


let contador = 1;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let contador7 = 0;
let contador8 = 0;
let contador9 = 0;

let contador1x = 0;
let contador2x= 0;
let contador3x = 0;
let contador4x = 0;
let contador5x = 0;
let contador6x = 0;
let contador7x = 0;
let contador8x = 0;
let contador9x = 0;

let contador1bola = 0;
let contador2bola= 0;
let contador3bola = 0;
let contador4bola = 0;
let contador5bola = 0;
let contador6bola = 0;
let contador7bola = 0;
let contador8bola = 0;
let contador9bola = 0;




btn1.addEventListener("click", () => {
    
    if (contador % 2 != 0 && contador1 == 0)
    {
        x1();
        contador1x++;
        contador1++;
        contador++;
    }
    else if (contador % 2 == 0 && contador1 == 0){
        bola1();
        contador1bola++;
        contador1++;
        contador++;
    }
    
    if (contador == 10)
        {
            empate();
        }

    x_ganha();
    bola_ganha();
});
btn2.addEventListener("click", () => {
    
    if (contador % 2 != 0 && contador2 == 0)
    {
        x2();
        contador2x++;
        contador2++;
        contador++;
    }
    else if (contador % 2 == 0 && contador2 == 0){
        bola2();
        contador2bola++;
        contador2++;
        contador++;
    }
    
    if (contador == 10)
        {
            empate();
        }

    x_ganha();
    bola_ganha();
});
btn3.addEventListener("click", () => {
    
    if (contador % 2 != 0 && contador3 == 0)
        {
            x3();
            contador3x++;
            contador3++;
            contador++;
        }
        else if (contador % 2 == 0 && contador3 == 0){
            bola3();
            contador3bola++;
            contador3++;
            contador++;
        }
    
    if (contador == 10)
        {
            empate();
        }

        x_ganha();
    bola_ganha();
});
btn4.addEventListener("click", () => {
        
        if (contador % 2 != 0 && contador4 == 0)
        {
            x4();
            contador4x++;
            contador4++;
            contador++;
        }
        else if (contador % 2 == 0 && contador4 == 0){
            bola4();
            contador4bola++;
            contador4++;
            contador++;
        }   
        
        if (contador == 10)
        {
            empate();
        }

        x_ganha();
        bola_ganha();
});
btn5.addEventListener("click", () => {
        
        if (contador % 2 != 0 && contador5 == 0)
        {
            x5();
            contador5x++;
            contador5++;
            contador++;
        }
        else if (contador % 2 == 0 && contador5 == 0){
            bola5();
            contador5bola++;
            contador5++;
            contador++;
        }
        
        if (contador == 10)
        {
            empate();
        }

        x_ganha();
        bola_ganha();
});
btn6.addEventListener("click", () => {
        
        if (contador % 2 != 0 && contador6 == 0)
        {
            x6();
            contador6x++;
            contador6++;
            contador++;
        }
        else if (contador % 2 == 0 && contador6 == 0){
            bola6();
            contador6bola++;
            contador6++;
            contador++;
        }
        
        if (contador == 10)
        {
            empate();
        }

        x_ganha();
        bola_ganha();
});
btn7.addEventListener("click", () => {
        
        if (contador % 2 != 0 && contador7 == 0)
        {
            x7();
            contador7x++;
            contador7++;
            contador++;
        }
        else if (contador % 2 == 0 && contador7 == 0){
            bola7();
            contador7bola++;
            contador7++;
            contador++;
        }
        
        if (contador == 10)
        {
            empate();
        }

        x_ganha();
        bola_ganha();
});
btn8.addEventListener("click", () => {
        
        if (contador % 2 != 0 && contador8 == 0)
        {
            x8();
            contador8x++;
            contador8++;
            contador++;
        }
        else if (contador % 2 == 0 && contador8 == 0){
            bola8();
            contador8bola++;
            contador8++;
            contador++;
        }
        
        if (contador == 10)
        {
            empate();
        }

        x_ganha();
        bola_ganha();
});
btn9.addEventListener("click", () => {
        
        if (contador % 2 != 0 && contador9 == 0)
        {
            x9();
            contador9x++;
            contador9++;
            contador++;
        }
        else if (contador % 2 == 0 && contador9 == 0){
            bola9();
            contador9bola++;
            contador9++;
            contador++;
        }
        if (contador == 10)
        {
            empate();
        }
        
        x_ganha();
        bola_ganha();
});



function x1()
{
    document.getElementById('space1').innerHTML = "X"
    document.getElementById('space1').style.color = "black";
}

function bola1 ()
{
    document.getElementById('space1').innerHTML = "O"
    document.getElementById('space1').style.color = "black";
}
function x2()
{
    document.getElementById('space2').innerHTML = "X"
    document.getElementById('space2').style.color = "black";
}

function bola2 ()
{
    document.getElementById('space2').innerHTML = "O";
    document.getElementById('space2').style.color = "black";
    
}
function x3()
{
    document.getElementById('space3').innerHTML = "X"
    document.getElementById('space3').style.color = "black";
}

function bola3 ()
{
    document.getElementById('space3').innerHTML = "O";
    document.getElementById('space3').style.color = "black";
}
function x4()
{  
    document.getElementById('space4').innerHTML = "X"
    document.getElementById('space4').style.color = "black";   
}

function bola4 ()
{
    document.getElementById('space4').innerHTML = "O";
    document.getElementById('space4').style.color = "black"; 
}

function x5()
{
    document.getElementById('space5').innerHTML = "X"
    document.getElementById('space5').style.color = "black";
}
function bola5 ()
{
    document.getElementById('space5').innerHTML = "O";
    document.getElementById('space5').style.color = "black";
}
function x6()
{  
    document.getElementById('space6').innerHTML = "X"
    document.getElementById('space6').style.color = "black";   
}

function bola6 ()
{
    document.getElementById('space6').innerHTML = "O";
    document.getElementById('space6').style.color = "black";  
}
function x7()
{
    document.getElementById('space7').innerHTML = "X"
    document.getElementById('space7').style.color = "black"; 
}

function bola7 ()
{
    document.getElementById('space7').innerHTML = "O";
    document.getElementById('space7').style.color = "black";  
}
function x8()
{
    document.getElementById('space8').innerHTML = "X"
    document.getElementById('space8').style.color = "black";
}

function bola8 ()
{
    document.getElementById('space8').innerHTML = "O";
    document.getElementById('space8').style.color = "black";
}

function x9()
{
    document.getElementById('space9').innerHTML = "X"
    document.getElementById('space9').style.color = "black";   
}

function bola9 ()
{
    document.getElementById('space9').innerHTML = "O";
    document.getElementById('space9').style.color = "black";
}

function x_ganha ()
{
    if (contador1x == 1 && contador2x == 1 && contador3x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
    else if (contador1x == 1 && contador4x == 1 && contador7x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
    else if (contador7x == 1 && contador8x == 1 && contador9x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
    else if (contador3x == 1 && contador6x == 1 && contador9x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
    else if (contador4x == 1 && contador5x == 1 && contador6x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
    else if (contador2x == 1 && contador5x == 1 && contador8x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }

    else if (contador1x == 1 && contador5x == 1 && contador9x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
    else if (contador3x == 1 && contador5x == 1 && contador7x == 1)
    {
        console.log('x ganhou');
        window.location.href = "restart_x.html";
    }
}
function bola_ganha ()
{
    if (contador1bola == 1 && contador2bola == 1 && contador3bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador1bola == 1 && contador4bola == 1 && contador7bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador7bola == 1 && contador8bola == 1 && contador9bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador3bola == 1 && contador6bola == 1 && contador9bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador1bola == 1 && contador5bola == 1 && contador9bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador3bola == 1 && contador5bola == 1 && contador7bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador4bola == 1 && contador5bola == 1 && contador6bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
    else if (contador2bola == 1 && contador5bola == 1 && contador8bola == 1)
    {
        console.log('bola ganhou');
        window.location.href = "restart_bola.html";
    }
}

function empate ()
{
    window.location.href = "empate.html";
}
