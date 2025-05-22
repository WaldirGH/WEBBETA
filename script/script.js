const usuariosValidos = [
    { usuario: "70798723", clave: "70798723" },
    { usuario: "WALDIR", clave: "TEAMO" },
    { usuario: "EDITH", clave: "73062107" }
];

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const usuario = document.getElementById("usuario").value.trim();
            const clave = document.getElementById("clave").value.trim();

            const usuarioValido = usuariosValidos.find(
                (u) => u.usuario === usuario && u.clave === clave
            );

            if (usuarioValido) {
                localStorage.setItem("logueado", "true");
                localStorage.setItem("usuario", usuario);
                window.location.href = "./pages/dashboard.html";
            } else {
                mensajeError.textContent = "Usuario o clave incorrectos";
                mensajeError.style.display = "block";
                setTimeout(() => {
                    mensajeError.style.display = "none";
                }, 3000);
            }
        });
    }

    if (document.getElementById("resultado")) {
        if (localStorage.getItem("logueado") !== "true") {
            alert("Debes iniciar sesión");
            window.location.href = "../index.html";
        } else {
            const usuario = localStorage.getItem("usuario");
            const saludo = document.createElement("h2");
            saludo.textContent = `¡Hola, ${usuario}!`;
            document.body.insertBefore(saludo, document.body.children[2]);
        }
    }
});

class Listo {
    constructor(a, b, c, d, e, f) {
        this.croissant_pollo = a;
        this.croissant_mixto = b;
        this.pita_pollo = c;
        this.ciabatta_pollo = d;
        this.ciabatta_mixta = e;
        this.ciabatta_club = f;
    }

    pan_Croissant() {
        return this.croissant_pollo + this.croissant_mixto;
    }

    pan_Ciabatta() {
        return this.ciabatta_mixta + this.ciabatta_pollo + this.ciabatta_club;
    }

    pan_Pita() {
        return this.pita_pollo;
    }

    jamon() {
        return (this.ciabatta_mixta * 40) + (this.croissant_mixto * 40) + (this.ciabatta_club * 20);
    }

    queso() {
        return (this.ciabatta_mixta * 40) + (this.croissant_mixto * 40) + (this.ciabatta_club * 20);
    }

    m_pollo() {
        return (this.croissant_pollo * 65) + (this.ciabatta_pollo * 65) + (this.pita_pollo * 60) + (this.ciabatta_club * 45);
    }

    lechuga() {
        return (this.pita_pollo + this.ciabatta_pollo) * 10;
    }

    listar() {
        return `
Pan Croissant: ${this.pan_Croissant()}
Pan Ciabatta: ${this.pan_Ciabatta()}
Pan Pita: ${this.pan_Pita()}
Jamón: ${this.jamon()} g
Queso: ${this.queso()} g
Masa de Pollo: ${this.m_pollo()} g
Lechuga: ${this.lechuga()} g`;
    }
}

function calcular() {
    const a = parseInt(document.getElementById("croissant_pollo").value) || 0;
    const b = parseInt(document.getElementById("croissant_mixto").value) || 0;
    const c = parseInt(document.getElementById("pita_pollo").value) || 0;
    const d = parseInt(document.getElementById("ciabatta_pollo").value) || 0;
    const e = parseInt(document.getElementById("ciabatta_mixta").value) || 0;
    const f = parseInt(document.getElementById("ciabatta_club").value) || 0;

    const resultado = new Listo(a, b, c, d, e, f);
    document.getElementById("respuesta").innerText = resultado.listar();
    document.getElementById("resultado").style.display = "flex"; 
    }
    function cerrarModal(event) {
        if (event.target === document.getElementById('resultado')) {
        document.getElementById('resultado').style.display = 'none';
        }

    }

    function eventoModal(event) {
        event.stopPropagation();
    }


function cerrarSesion() {
    localStorage.removeItem("logueado");
    localStorage.removeItem("usuario");
    window.location.href = "../index.html";
}

