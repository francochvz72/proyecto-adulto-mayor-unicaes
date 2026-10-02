// CLASE ABSTRACTA Y OBJETOS (POO C# -> JS)
class Actividad {
    constructor(id, nombre, area, duracionMinutos) {
        this.id = id;
        this.nombre = nombre;
        this.area = area;
        this.duracionMinutos = duracionMinutos;
    }

    obtenerDetalles() {
        return `[Área ${this.area}] ${this.nombre} - ${this.duracionMinutos} minutos`;
    }
}

// CATÁLOGO
const catalogoActividades = [
    new Actividad(1, "Juegos de Mesa y Dinámicas de Grupo", "Social", 45),
    new Actividad(2, "Ejercicios de Memoria y Crucigramas", "Cognitiva", 30),
    new Actividad(3, "Alfabetización Digital Básica (Móvil)", "Cognitiva", 40),
    new Actividad(4, "Sesión Grupal de Escucha Activa", "Emocional", 35),
    new Actividad(5, "Gimnasia Suave Adaptada", "Corporal", 25)
];

// REGISTRO DE JORNADA
class Jornada {
    constructor() {
        this.actividades = [];
    }

    agregar(actividad) {
        this.actividades.push(actividad);
    }

    obtenerTotalMinutos() {
        return this.actividades.reduce((sum, act) => sum + act.duracionMinutos, 0);
    }
}

const miJornada = new Jornada();

// EVENTOS DOM
document.addEventListener("DOMContentLoaded", () => {
    const selectUI = document.getElementById("selectActividad");
    const btnAgregar = document.getElementById("btnAgregar");
    const listaUI = document.getElementById("listaJornada");
    const txtTotal = document.getElementById("txtTiempoTotal");

    // Llenar selector
    catalogoActividades.forEach(act => {
        const option = document.createElement("option");
        option.value = act.id;
        option.textContent = act.obtenerDetalles();
        selectUI.appendChild(option);
    });

    // Agregar actividad
    btnAgregar.addEventListener("click", () => {
        const id = parseInt(selectUI.value);
        const actividad = catalogoActividades.find(a => a.id === id);

        if (actividad) {
            miJornada.agregar(actividad);

            const li = document.createElement("li");
            li.textContent = `✓ ${actividad.obtenerDetalles()}`;
            listaUI.appendChild(li);

            txtTotal.textContent = miJornada.obtenerTotalMinutos();
        }
    });
});