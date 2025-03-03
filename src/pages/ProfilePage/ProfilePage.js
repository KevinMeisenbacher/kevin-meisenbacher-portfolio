import './ProfilePage.scss';

const ProfilePage = () => {
    return (
        <main className='profile'>
            <section className='section'>
                <p className='story'>Passion for improving lives with high quality software </p>
                <p className='story'>Brings out everyone's unique strengths </p>
                <p className='story'>Careful to achieve reliable results for an infinitely unique user base</p>
            </section>
            <section className='section'>
                <h2 className='title'>Skills</h2>
                <article className='skills'>
                    <div className='skills-column'>
                        <h3>Programming</h3>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>C#</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Front End</h3>
                        <p>HTML5</p>
                        <p>CSS/SASS/TailwindCSS</p>
                        <p>React</p>
                        <p>Axios</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Back End</h3>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>RESTful APIs</p>
                        <p>Knex.js</p>
                        <p>OAuth</p>
                        <p>ASP.NET</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Databases</h3>
                        <p>MySQL</p>
                        <p>SQLite</p>
                        <p>MS SQL</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Workflow/Deployment</h3>
                        <p>Git</p>
                        <p>JIRA</p>
                        <p>Amazon Web Services</p>
                        <p>Vercel</p>
                        <p>Heroku</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default ProfilePage;