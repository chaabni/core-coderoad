import * as React from 'react';

import DynamicStepper from './DynamicStepper';
import StepCheck from './StepCheck';
import VerifyButton from './VerifyButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Step, StepContent, StepLabel} from 'material-ui/Stepper';
// import {openDirectory, createPackageJson} from '../../../reducers/checks/action-setup';


class SetupChecks extends React.Component<{
  checks: CR.Checks
}, {}> {
  public render(): any {
    const {setup} = this.props.checks;
    if (setup.passed) {
      return null;
    }
    const {hasDir, hasPackageJson, hasTutorial} = setup;
    const status = [hasDir, hasPackageJson, hasTutorial];
    return (
      <Card className='cr-check'>
        <CardHeader
          title='Setup Checks'
          subtitle='CodeRoad requires a brief setup'
        />
        <CardText>
          <DynamicStepper status={status}>
            <StepCheck
              label='open a directory'
              completed={hasDir}
            >
              <p>File -> Open (a new folder)</p><br />
              <FlatButton
                label='Open Directory'
                secondary={true}
                /* onTouchTap={openDirectory} */
              />
            </StepCheck>

            <StepCheck
              label='package.json'
              completed={hasPackageJson}
            >
              Create a package.json by running<br />
              <code>> npm init -y`</code><br />
              <FlatButton
                label='Create package.json'
                secondary={true}
                /* onTouchTap={createPackageJson} */
              />
            </StepCheck>

            <StepCheck
              label='install a tutorial'
              completed={hasTutorial}
            >
              Install a tutorial using npm. For example:<br />
              <code>> npm install --save-dev coderoad-functional-school</code><br />
            </StepCheck>
          </DynamicStepper>
        </CardText>
        <CardActions>
          <VerifyButton />
        </CardActions>
      </Card>
    );
  }
};
export default SetupChecks;
