function Header() {
    return (
        <header className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">Bogomil</a>
                        </div>
                        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className=" smooth-menu active"></li>
                                <li className="smooth-menu"><a href="#about">About</a></li>
                                <li className=" smooth-menu"><a href="#education">education</a></li>
                                <li className="smooth-menu"><a href="#skills">skills</a></li>
                                <li className="smooth-menu"><a href="#experience">experience</a></li>
                                <li className="smooth-menu"><a href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <div className="clearfix"></div>

        </header>
    );
}

export default Header;