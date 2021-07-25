export function toogleProduct(id) {
  return {
    type: 'TOOGLE_PRODUCT',
    payload: id,
  }
}