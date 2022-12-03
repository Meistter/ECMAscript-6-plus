import fetch from "node-fetch";

const respoinse = await fetch('https://api.escuelajs.co/api/v1/products')
const products = await respoinse.json()

export default products