import './Side.css';
import article from '../../data/article.json'

function Side() {
  return (
    <div className='Side-site'>
       <nav>
         <ul>
              <ul>
                <li className='li-navbar'>
                {article.map(item => 
                  <><img src={item.img} /><a href={item.href}>{item.navtitle}</a></>
                  )}
                {article.map(item => 
                  <><img src={item.img} /><a href={item.href}>{item.navtitle}</a></>
                  )}
                {article.map(item => 
                  <><img src={item.img} /><a href={item.href}>{item.navtitle}</a></>
                  )}
                {article.map(item => 
                  <><img src={item.img} /><a href={item.href}>{item.navtitle}</a></>
                  )}
                </li>
              </ul>
         </ul>
       </nav>
    </div>
  )
}

export default Side