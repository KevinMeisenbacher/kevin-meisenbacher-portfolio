import './ProjectsPage.scss';

const ProjectsPage = () => {
    return (
        <main className='projects'>
            <h2 className='title'>Projects</h2>
            <section className='projects-list'>
                <article className='project'>
                    <a href='https://www.youtube.com/watch?v=5c70b4oBcgg'>
                        <h2>Music Buddy</h2>
                        <iframe src='https://www.youtube.com/embed/5c70b4oBcgg?si=lyAi7Qxep-3CFdFY' />
                    </a>
                </article>
                <article className='project'>
                    <a href='https://www.youtube.com/watch?v=oHm6cYGCQSI'>
                        <h2>Dark Souls Mod Manager</h2>
                        <iframe src='https://www.youtube.com/embed/oHm6cYGCQSI?si=ZHC9-n-kIf1gVovu' title='video' />
                    </a>
                </article>
            </section>
        </main>
    )
}

export default ProjectsPage;