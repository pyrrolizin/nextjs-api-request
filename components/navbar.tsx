import Link from 'next/link'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function Navbar() {
    return (
        <>
            <header className="site-header">
                <nav className="navbar navbar-expand-md navbar-dark bg-steel">
                    <div className="container">
                        <Link href="/"><a className="navbar-brand mx-5">Next.js API Request</a></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="/"><a className="nav-link active" aria-current="page">Home</a></Link>
                                </li>
                            </ul><ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href={publicRuntimeConfig.githubrepourl}>GitHub</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}