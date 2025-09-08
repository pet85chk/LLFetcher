import { injectLink } from "./injectLink"
/**
 * Inyecta un tag link de forma asíncrona en el DOM en el elemento especificado.
 *
 * @param {string} rel - El atributo rel del link (ej: "stylesheet", "modulepreload")
 * @param {string} href - La URL del link a ser inyectado
 * @param {boolean} preload - Si debe usar preload o no
 * @param {string} tag - El elemento HTML donde inyectar (por defecto "body")
 * @param {function} [callback] - Función callback opcional a ejecutar cuando el link termine de cargar
 * @returns {Promise<HTMLLinkElement>} Una promesa que resuelve al elemento link inyectado
 */
export const injectLinkAsync = async (rel, href, preload = true, tag = "body", callback = (f) => f) => {
  return new Promise((resolve, reject) => {
    injectLink(
      rel,
      chrome.runtime.getURL(href),
      preload,
      tag,
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