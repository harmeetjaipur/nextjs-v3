import styles from './style.module.css'

const DocsPage = (props: { params: { id: string } }) => {
  console.log(props)
  return (
    <div className={styles.title}>
      Docs Page ID: {props.params.id || 'Docs root folder'}
    </div>
  )
}

export default DocsPage
