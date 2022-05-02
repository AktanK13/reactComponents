import './Main.css';
import article from '../../data/article.json';


function Main() {
  return (
    <div className='Main-site'>
      {article.map(item => 
      <section>
        <h2>{item.title}</h2>
        <div>{item.body}</div>
      </section>)}
    </div>
  )
}

export default Main;