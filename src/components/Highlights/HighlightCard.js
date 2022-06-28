import React from 'react'
import { CardContent, Card, Typography, makeStyles } from '@material-ui/core'
// const colors = ['#4592da', '#9e4a97', '#6a7cce', '#8a64b7']
const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === 'confirmed') return { backgroundColor: '#f9976a' }
    if (props.type === 'deaths') return { backgroundColor: '#13c383' }
    if (props.type === 'recovered') return { backgroundColor: '#ff5d72' }
    else return { backgroundColor: '#07a8b0' }
  },
  title: {
    marginBottom: 5,
    textAlign: 'center',
    color: '#ffffff',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
  },
})

export default function HighlightCard({ title, count, type }) {
  const styles = useStyles({ type })
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography className={styles.title} component='p' variant='body2'>
          {title}
        </Typography>
        <Typography className={styles.count} component='p' variant='body2'>
          {count}
        </Typography>
      </CardContent>
    </Card>
  )
}
