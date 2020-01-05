// import React, { Component } from 'react'
// import Typography from '@material-ui/core/Typography'
// import Moment from 'react-moment'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
// import moment from 'moment'

// const data = [
//   { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
// ]

// const renderBarChart = (
//   <BarChart width={600} height={300} data={data}>
//     <XAxis dataKey="name" />
//     <YAxis />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8" />
//   </BarChart>
// )

// export default class ChartPage extends Component {
//   state = {
//     tanggalDefault: new Date('2019-12-31T24:00:00+07:00'),
//     durasiJam: '',
//     durasiMenit: '',
//     durasiDetik: '',
//   }

//   setCountdown = () => {
//     const waktuPenutupan = this.state.tanggalDefault.getTime()
//     const waktuSekarang = Date.now()
//     const selisihWaktu = waktuPenutupan - waktuSekarang
//     const interval = 1000
//     let durasi = moment.duration(selisihWaktu * 1000, 'milliseconds')

//     setInterval(function() {
//       durasi = moment.duration(durasi - interval, 'milliseconds')

//       $('.countdown').text(
//         duration.hours() + ':' + duration.minutes() + ':' + duration.seconds()
//       )
//     }, interval)
//   }

//   render() {
//     return (
//       <div>
//         <Typography variant="subtitle2" gutterBottom>
//           <Moment interval={1000}>{Date.now()}</Moment>
//         </Typography>
//         {renderBarChart}
//       </div>
//     )
//   }
// }
