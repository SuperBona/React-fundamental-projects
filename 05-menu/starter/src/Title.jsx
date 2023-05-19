const Title = ({ text }) => {
  return (
    <div className='title'>
      {/* 1 */}
      <h2>{text || 'Default Title'}</h2>
      <div className='title-underline'></div>
    </div>
  )
}
export default Title

// imposto le props di title e il return - title verrà usato più volte, quindi su app.jsx vado a dare un valore text quando deve essere qualcosa di specifico

// 1: if the text is not provided, then I'm just going to return a default title.
//ritorno su app
