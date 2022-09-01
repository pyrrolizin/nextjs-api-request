import styles from './footer.module.css'
import classnames from 'classnames'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className={classnames('text-center', 'p-3', styles.footer_bg)}>
                <p>Source: <a href="https://openweathermap.org/api">OpenWeatherMap API</a></p>

                <p>Developed by <a href={publicRuntimeConfig.githuburl}>Peter Keck</a> - <a href={publicRuntimeConfig.githubrepourl}>Sourcecode</a></p>
            </div>
        </footer>
    )
}