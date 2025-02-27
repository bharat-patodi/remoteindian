import { HeaderWrap } from './style';

const SiteNav = () => (
  <HeaderWrap>
    <div className="top-row container">
      <div className="flex-grow-1 brand">
        <a href="/">
          <img src="/brand.png" alt="" />
        </a>
      </div>
      <div className="nav-links">
        <a href="/interviews">Interviews</a>
        <a href="/guides">Guides</a>
        {/* <a href='/sponsors' className='d-none d-md-inline-block'>Sponsors</a>
        <a href='/about' className='d-none d-md-inline-block'>FAQ</a>*/}
        <a href="/signup" className="signup">
          Join Us
        </a>
      </div>
    </div>
  </HeaderWrap>
);

export default SiteNav;
