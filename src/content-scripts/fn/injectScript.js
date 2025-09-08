/**
 * Inyecta un tag script en el DOM en la ubicación especificada.
 *
 * @param {string} src - La URL del script a ser inyectado
 * @param {string} tag - El nombre del elemento HTML donde inyectar (ej: head o body)
 * @param {string} type - El tipo de script (por defecto "text/javascript")
 * @param {function} [callback] - Función callback opcional a ejecutar cuando el script termine de cargar
 * @param {function} [error] - Función callback opcional a ejecutar si hay error cargando el script
 */
export const injectScript = (
  src,
  tag,
  type = "text/javascript",
  callback = (f) => f,
  error = (f) => f
) => {
  let node = document.getElementsByTagName(tag)[0]
  let script = document.createElement("script")
  script.addEventListener("load", () => {
    console.log(`${script.src} loaded`)
    callback(script)
  })
  script.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev)
    error(ev)
  })
  script.setAttribute("type", type)
  script.setAttribute("src", src)
  node.appendChild(script)
}
