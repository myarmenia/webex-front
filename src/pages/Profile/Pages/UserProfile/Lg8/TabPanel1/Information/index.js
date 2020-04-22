import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import { CONST_USER_DATA } from '../../../../../../../redux/Variables/Const';
import { userData } from '../../../../../../../redux/Variables/Let';

function Information(){
  const BorderLinearProgress = LinearProgress;

  return (
    <>
      <ListItem>
        <Grid className="pt-20px ml-12px" container>
          <Grid className="pb-30px" container>
            <Grid item lg={6}>
              <p className="textParagraph">
                { CONST_USER_DATA.payMoney }
              </p>
              <p className="textProgressBar">
                { userData.payMoney }
              </p>
            </Grid>
            <Grid item lg={6}>
              <p className="textParagraph">
                { CONST_USER_DATA.theDayOfPayment }
              </p>
              <p className="textProgressBar">
                { userData.theDayOfPayment }
              </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6}>
              <p className="textParagraph">
                <strong className="underline">
                  { CONST_USER_DATA.classAttendance }
                </strong>
                { CONST_USER_DATA.byMonth }
              </p>
              <p className="textProgressBar">
                { userData.byMonth }
              </p>
            </Grid>
            <Grid item lg={6}>
              <p className="textParagraph">
                { CONST_USER_DATA.byDays }
              </p>
              <BorderLinearProgress
                className="progressBar"
                variant="determinate"
                value={40}
              />
              <p className="textProgressBar">
                { userData.byDays }
              </p>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </>
  )
}

export default Information;