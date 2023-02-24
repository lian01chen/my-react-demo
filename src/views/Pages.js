import { Link } from 'react-router-dom';
export default function Pages(props) {
  return (
    <div>
      <h3>Page list</h3>
      <hr />
      <ul>
        <li><Link to='/home'>首页</Link></li>
        <li><Link to='/about'>关于</Link></li>
        <li><Link to='/try'>小试</Link></li>
      </ul>
    </div>
  )
}