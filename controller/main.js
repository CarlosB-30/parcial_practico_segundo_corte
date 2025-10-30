function crearEmpleado() {
  document.getElementById("divAgregarEmpleado").style.display = "block";
}

function agregarEmpleado() {
  let cc = document.getElementById("cc").value;
  let nombresyApellidos = document.getElementById("nombresyApellidos").value;
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let sueldoBase = document.getElementById("sueldoBase").value;
  let tipoEmpleado = document.getElementById("tipoEmpleado").value;
  let tipoBonificacion = document.getElementById("tipoBonificacion").value;

  let nuevoEmpleado = new Empleado(
    cc,
    nombresyApellidos,
    direccion,
    email,
    telefono,
    sueldoBase,
    tipoEmpleado,
    tipoBonificacion
  );

  let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
  empleados.push(nuevoEmpleado);

  localStorage.setItem("empleados", JSON.stringify(empleados));

  mostrarEmpleados();

  document.getElementById("formEmpleado").reset();
  document.getElementById("divAgregarEmpleado").style.display = "none";

  alert("Empleado agregado exitosamente");
}

function mostrarEmpleados() {
  let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
  let tbody = document.getElementById("tbodyEmpleados");
  tbody.innerHTML = "";
  let totalNomina = 0;

  empleados.forEach((emp, index) => {
    totalNomina += emp.sueldoTotal;

    let fila = `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.cc}</td>
        <td>${emp.nombresyApellidos}</td>
        <td>${emp.direccion}</td>
        <td>${emp.email}</td>
        <td>${emp.telefono}</td>
        <td>${emp.sueldoBase}</td>
        <td>${emp.tipoEmpleado}</td>
        <td>${emp.tipoBonificacion}</td>
        <td>${emp.sueldoTotal}</td>
      </tr>
    `;
    tbody.innerHTML += fila;
  });

  document.getElementById("totalNomina").innerText =
    "Total Nómina: $" + totalNomina.toLocaleString();
}

window.onload = function () {
  document.getElementById("divAgregarEmpleado").style.display = "none";
  mostrarEmpleados();
};