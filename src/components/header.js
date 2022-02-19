import * as React from "react"

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-desktop">
          <div className="header-title-nav-wrapper">
            <div className="header-title">
              <a>Clove Therapy</a>
            </div>
            <div className="header-nav">
              <div className="header-nav-list">
                <div className="header-nav-item">
                  <a href="/about">About</a>
                </div>
                <div className="header-nav-item">
                  <a href="/services">Services</a>
                </div>
                <div className="header-nav-item">
                  <a href="/team">Team</a>
                </div>
                <div className="header-nav-item">
                  <a href="/blog">Blog</a>
                </div>
                <div className="header-nav-item">
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <button>Get started</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
