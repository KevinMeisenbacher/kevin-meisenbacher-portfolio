import './ProfilePage.scss';

const ProfilePage = () => {
    return (
        <main className='profile'>
            <section className='section'>
                <p className='story'>Passion for improving lives with high quality software</p>
                <p className='story'>Focused on reliable results for all demographics and needs</p>
                <p className='story'>Inspires team synergy by recognizing individual strengths</p>
                <p className='story'>Learns thoroughly for proper understanding to build efficient features</p>
            </section>
            <section className='section'>
                <h2 className='title'>Skills</h2>
                <article className='skills'>
                    <div className='skills-column'>
                        <h3>Languages</h3>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>C#</p>
                        <p>Go</p>
                        <p>Java</p>
                        <p>MySQL</p>
                        <p>SQLite</p>
                        <p>MongoDB</p>
                        <p>Firebase</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Resources</h3>
                        <p>React.js</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>Knex</p>
                        <p>SASS</p>
                        <p>TailwindCSS</p>
                        <p>ShadUI</p>
                        <p>RESTful APIs</p>
                        <p>Axios</p>
                        <p>ASP.NET</p>
                        <p>Windows Forms</p>
                        <p>Maven</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Workflow</h3>
                        <p>Git</p>
                        <p>AWS</p>
                        <p>Heroku</p>
                        <p>Vercel</p>
                        <p>JIRA</p>
                        <p>Slack</p>
                        <p>Figma</p>
                        <p>Miro</p>
                        <p>Figjam</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default ProfilePage;