import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    maginTop: theme.spacing.unit * 3,
    overflowX : 'auto'} 
,
table: {
  minWidth: 1080
}})

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'안성욱',
  'birthday':'970602',
  'gender': '남자',
  'job':'Crazyones'
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'신대령',
  'birthday':'970602',
  'gender': '남자',
  'job':'관악경찰서'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name':'김성욱',
  'birthday':'970602',
  'gender': '남자',
  'job':'Crazyones'
}
]
class App extends Component{
  render() {
    const {classes} = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
          {customers.map( c => {return ( <Customer key ={c.id} id = {c.id} image ={c.image} name={c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)
          }
          )
        }
        </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
