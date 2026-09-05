import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.heading}>Our Story</h1>
      <p className={styles.p}>
        Santos Restaurant started in a small kitchen, long before it had a name.
        My mother believed dessert wasn't just something you ate after dinner —
        it was how you told someone you loved them without saying it out loud.
      </p>
      <p className={styles.p}>
        Every recipe on our menu carries a piece of that kitchen — 
        the burnt-sugar smell of caramel, the sound of a whisk against a copper bowl,
        the patience it takes to get crème brûlée just right.
      </p>
      <p className={styles.signature}> Made with love, for two.</p>
    </div>
  )
}

export default About