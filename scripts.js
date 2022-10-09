function calculaResult(event){
    event.preventDefault();
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    if(peso == 0 | altura == 0){
        alert("por favor, preencha os campos")
        return;
    }

    let total = peso / (altura * altura);
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    
    if(total < 18,5){
        document.getElementById('media').innerHTML = "abaixo do peso normal";
        document.getElementById('media').style.display = "block";
    }
    if(total >= 18,5 | total <= 24,9){
        document.getElementById('media').innerHTML = "Peso normal";
        document.getElementById('media').style.display = "block";
    }
    if(total >= 25,0 | total <= 29,9){
        document.getElementById('media').innerHTML = "Exesso de peso";
        document.getElementById('media').style.display = "block";
    }
    if(total >= 30,0 | total <= 34,9){
        document.getElementById('media').innerHTML = "Obesidade classe 1";
        document.getElementById('media').style.display = "block";
    }
    if(total >= 35,0 | total <= 39,9){
        document.getElementById('media').innerHTML = "Obesidade classe 2";
        document.getElementById('media').style.display = "block";
    }
    if(total >= 40,0){
        document.getElementById('media').innerHTML = "Obesidade classe 3";
        document.getElementById('media').style.display = "block";
    }

    document.getElementById('resultado').style.display = "block";
}

document.getElementById('resultado').style.display = "none";
document.getElementById('media').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculaResult);