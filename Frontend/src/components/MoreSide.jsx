import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight, FaArrowUp, FaArrowDown, FaA } from 'react-icons/fa6'

function MoreSide({morePos}) {
 
  const [change, setChange] = useState(false);

  function handleHideMore() {
    document.querySelector('.more-ele').classList.remove('show');
    return;
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 545px)').matches) {
        setChange(true);
    }
  }, [])

  return (
    <div className={`more-ele ${change && morePos ? 'top' : 'bottom'}`}>
        <button onClick={handleHideMore}>
            {change ? morePos ? (<FaArrowUp />) : (<FaArrowDown />) : (<FaArrowRight />)}
        </button>
        <ul>
            <li>
                <Link to='/more/Logo'>
                    <h3>My Logo</h3>
                </Link>
            </li>
            <li>
                <Link to='/more/AncientProjects'>
                    <h3>Ancient Projects</h3>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default MoreSide;