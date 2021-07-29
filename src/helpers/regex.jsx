/**
 * Solo permitir caracteres sin espacios en minuscula. Ej: maria
 * Minimo 3 y maximo 8
 */
export const soloCaracteresSinEspacios = /^([A-zñáéíóüú]{1,8})$/

/**
 * Solo permitir caracteres con espacios en minuscula. Ej: maria
 * Minimo 3 y maximo 8
 */
export const soloCaracteresConEspacios = /^([a-zñáéíóüú ]{3,8})$/

/**
 * Solo permitir cedulas minimo 7 y maximo 8 digitos
 */
export const regexCedula = /^([0-9]{7,8})$/
export const RegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
/**
 * Solo permitir correos
 */
// eslint-disable-next-line
export const regexCorreo = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

/**
 * Formato para rif tipo:
 * j-12345678-1
 */
export const rif = /^([VEJPGvejpg]{1})-([0-9]{8})-([0-9]{1}$)/
