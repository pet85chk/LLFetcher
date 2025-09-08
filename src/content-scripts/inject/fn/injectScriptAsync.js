import { injectScript } from "./injectScript"
/**
 * Inyecta un tag script de forma asíncrona en el DOM en el elemento especificado.
 *
 * @param {string} src - La URL del script a ser inyectado
 * @param {string} type - El tipo de script (por defecto "text/javascript")
 * @param {string} tag - El elemento HTML donde inyectar (por defecto "body")
 * @param {function} [callback] - Función callback opcional a ejecutar cuando el script termine de cargar
 * @returns {Promise<HTMLScriptElement>} Una promesa que resuelve al elemento script inyectado
 */
export const injectScriptAsync = async (src, type = "text/javascript", tag = "body", callback = (f) => f) => {
  return new Promise((resolve, reject) => {
    injectScript(
      chrome.runtime.getURL(src),
      tag,
      type,
      (el) => {
        if (typeof callback === "function") {
          callback()
        }
        resolve(el)
      },
      (ev) => {
        reject(ev)
      }
    )
  })
}