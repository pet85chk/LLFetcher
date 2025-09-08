/**
 * Inyecta un tag link en el DOM en la ubicación especificada.
 *
 * @param {string} rel - El atributo rel del link
 * @param {string} href - La URL del link a ser inyectado
 * @param {boolean} preload - Si debe usar preload
 * @param {string} tag - El nombre del elemento HTML donde inyectar (ej: head o body)
 * @param {function} [callback] - Función callback opcional a ejecutar cuando el link termine de cargar
 * @param {function} [error] - Función callback opcional a ejecutar si hay error cargando el link
 */
export const injectLink = (
  rel,
  href,
  preload=false,
  tag='head',
  callback = (f) => f,
  error = (f) => f
) => {
  let node = document.getElementsByTagName(tag)[0]
  let link = document.createElement("link")
  link.addEventListener("load", () => {
    console.log(`${link.href} loaded`)
    callback(link)
  })
  link.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev)
    error(ev)
  })
  if(preload){
    link.setAttribute("preload", true)
  }
  link.setAttribute("rel", rel)
  link.setAttribute("crossorigin",true)
  link.setAttribute("href", href)
  node.appendChild(link)
}
