import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import { CONST_USER_DATA } from '../../../../../../../redux/Variables/Const';
// import { userData } from '../../../../../../../redux/Variables/Let'; // Armen: no need userData

function Information({ startDate, endDate, monthNumber, dayNumber, isPaid }){
  const BorderLinearProgress = LinearProgress;
  const coefficient = 8.333;
  const fillProgress = dayNumber * coefficient;

  const paidStatus = isPaid ? (
    <span className="blue">վճարված է</span>
  ) : (
    <span  className="red">վճարված չէ</span>
  );

  const paidDate = isPaid ? <span>{startDate}</span> : <span>--\--</span>;
  const dayNumberText = `դաս - ${dayNumber}`;
  const monthNumberText = `ամիս - ${monthNumber}`;

  return (
    <>
      <ListItem>
        <Grid className="pt-20px ml-12px" container>
          <Grid className="pb-30px" container>
            <Grid item sm={6}>
              <p className="textParagraph">
                { CONST_USER_DATA.payMoney }
              </p>
              <p className="textProgressBar">
                {/* { userData.payMoney } */}
                { paidStatus }
              </p>
            </Grid>
            <Grid item sm={6}>
              <p className="textParagraph">
                { CONST_USER_DATA.theDayOfPayment }
              </p>
              <p className="textProgressBar">
                {/* { userData.theDayOfPayment } */}
                { paidDate }
              </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={12}>
              <h6 className='training-schedule'>
                <strong className="underline">
                  { CONST_USER_DATA.classAttendance }
                </strong>                
              </h6>
            </Grid>
            <Grid item sm={6}>
              <p className="textParagraph">
              { CONST_USER_DATA.byMonth }
              </p>
              <p className="textProgressBar">
                {/* { userData.byMonth } */}
                { monthNumberText }
              </p>
            </Grid>
            <Grid item sm={6}>
              <p className="textParagraph">
                { CONST_USER_DATA.byDays }
              </p>
              <BorderLinearProgress
                className="progressBar"
                variant="determinate"
                value={fillProgress}
              />
              <p className="textProgressBar">
                {/* { userData.byDays } */}
                { dayNumberText }
              </p>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </>
  )
}

export default Information;