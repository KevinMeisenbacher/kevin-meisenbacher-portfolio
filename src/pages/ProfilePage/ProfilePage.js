import './ProfilePage.scss';

const ProfilePage = () => {
    return (
        <main className='profile'>
            <section className='section'>
                <p className='story'>Passion for improving lives with high quality software <br />
                Brings out everyone's unique strengths <br />
                Careful to achieve reliable results for an infinitely unique user base</p>
            </section>
            <section className='section'>
                <h2 className='title'>Skills</h2>
                <article className='skills'>
                    <div className='skills-column'>
                        <h3>Front End</h3>
                        <p>HTML5</p>
                        <p>CSS/SASS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Axios</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Back End</h3>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>Web APIs</p>
                        <p>Knex.js</p>
                        <p>OAuth</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Databases</h3>
                        <p>MySQL</p>
                        <p>SQLite</p>
                        <p>MS SQL</p>
                        <p>MongoDB</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Workflow/Deployment</h3>
                        <p>Git</p>
                        <p>JIRA</p>
                        <p>Amazon Web Services</p>
                        <p>Heroku</p>
                    </div>
                    <div className='skills-column'>
                        <h3>Desktop</h3>
                        <p>C#</p>
                        <p>Windows Forms</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default ProfilePage;