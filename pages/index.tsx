import Layout from '../src/Component/Layout';
import CardData from '../src/CardData';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

const Card = styled(Grid)({
  '& .cardItem': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: '25px 18px',
    '& .iconDiv': {
      padding: '22px 7px',
      marginRight: '8px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': { fontSize: '20px' },
    '& h2': {
      margin: '-5px 0px',
      fontSize: '26px'
    }
  }
})

export default function Home() {

  return (
    <Layout title="Home">
      <Grid container spacing={3}>
        {
          CardData && CardData.map((card) => {
            const { Icon, Title, count, color, bgColor } = card
            return <Card item xs={12} sm={12} md={6} lg={3} key=''>
              <div className="cardItem">
                <div className='iconDiv' style={{ background: bgColor }}>
                  <Icon style={{ color: color }} />
                </div>
                <div>
                  <small>{Title}</small>
                  <h2 style={{ color: color }}>{count}</h2>
                </div>
              </div>
            </Card>
          })
        }
      </Grid>
    </Layout>
  )
}
