/* 1 */
const MenuItem = ({ img, title, price, desc }) => {
  return (
    /* 2 */
    <article className='menu-item'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem

// 1: prendo le proprietà che mi interessano
// 2: return
//devo impostare set object -> collezione di unique values , per filtrare gli items (funzione btn)
//vado in app
