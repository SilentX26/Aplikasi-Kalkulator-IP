function theme(theme = null)
{
    var is_dark = (localStorage.getItem("theme") === "dark" && theme === null) || theme === "dark";
    if(theme !== null)
        localStorage.setItem("theme", theme);

    if(is_dark === true) {
        document.getElementsByTagName("body")[0].className = "bg-dark";
        document.querySelector("footer div a i").className = "fas fa-sun text-warning";
        document.querySelector("footer div a span").innerHTML = "Siang";
        document.querySelector("footer div a").setAttribute("href", "javascript:theme('sun');");

    } else {
        document.getElementsByTagName("body")[0].className = "bg-light";
        document.querySelector("footer div a i").className = "fas fa-moon text-dark";
        document.querySelector("footer div a span").innerHTML = "Malam";
        document.querySelector("footer div a").setAttribute("href", "javascript:theme('dark');");
    }
}

function __strrev(str)
{
    return str.split("").reverse().join("");
}

function __konversi(satuan, array_ip)
{
    var result = '';
    var rumus = '';
    var i = 0;

    switch(satuan) {
        case 'Biner':
            var bagi = 2;
            break;
        case 'Oktal':
            var bagi = 8;
            break;
        case 'Hexadesimal':
            var bagi = 16;
            break;

        default:
            alert('Satuan bilangan yang dipilih tidak val');
    }

    for(decimal of array_ip) {
        var temp_result = '';
        var temp_rumus = '';

        var j = 0;
        while(true) {
            var sisa_bagi = decimal % bagi;

            if(decimal <= 1 && j != 0)
                break;

            var temp_decimal = Math.floor(decimal / bagi);
            temp_rumus += ((j != 0) ? "\n" : '') + `${decimal}:${bagi}=${temp_decimal} sisa ${sisa_bagi}`;
            
            temp_result += sisa_bagi;
            decimal = temp_decimal;

            j++;
        }
        
        temp_result = __strrev(temp_result);
        if(i != 0) {
            result += ` ${temp_result}`;
            rumus += `\n\n${temp_rumus}`;
        } else {
            result += temp_result;
            rumus += temp_rumus;
        }

        i++;
    }

    document.getElementById("hasil").value = result;
    document.getElementById("cara-pengerjaan").value = rumus;
}

document.querySelector("form button[type=submit]").addEventListener("click", function(e) {
    e.preventDefault();

    var satuan = document.getElementsByName("satuan")[0].value;
    var ip = document.getElementsByName("ip")[0].value;
    var array_ip = ip.split(".");

    if(satuan == "") {
        alert("Harap pilih satuan bilangan yang diinginkan!");
    } else if(array_ip.length < 4 || array_ip.length > 4) {
        alert("Harap masukkan alamat IP yang valid!");

    } else {
        __konversi(satuan, array_ip);
    }
});

document.querySelector("form button[type=reset]").addEventListener("click", function(e) {
    document.getElementById("hasil").value = "";
    document.getElementById("cara-pengerjaan").value = "";
});