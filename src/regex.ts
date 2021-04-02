export const rIsPersianOnly = /^[\u0600-\u06FF\s]+$/;
export const rIsEnglishOnly = /^[a-z A-Z]$/;
export const rNumberOnly = /\d/;
export const rNoNumberOnly = /\D/g;

// eslint-disable-next-line
export const rIsEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const rIsPhoneNumber = /^09[0-9]{9}$/;
export const rDomainName = /^https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
