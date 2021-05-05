// creating dhtmlxGrid
const grid = new dhx.Grid("grid_container", {
  columns: [
    { id: "prioridad", header: [{ text: "Prioridad" }] },
    { id: "estatus", header: [{ text: "Estatus" }, { content: "selectFilter" }] },
    { id: "proyecto", header: [{ text: "Proyecto" }, { content: "inputFilter"}] },
    { id: "fechaInicio", header: [{ text: "Fecha Inicio" }] },
    { id: "fechaLimite", header: [{ text: "Fecha Límite" }] },
    { id: "basecamp", header: [{ text: "Basecamp" }] },
    { id: "drive", header: [{ text: "Drive" }] }
  ],
  data: dataset,
  selection: true,
	css: "tablaCustom",
  dragMode: "both",
	autoWidth: true
});
