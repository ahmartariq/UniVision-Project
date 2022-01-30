import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import history from './history';
import Universities from './Universities'
import { Recommendation } from "./Recommendation";
import { Recommendation1 } from "./Recommendation1";
import { Recommendation2 } from "./Recommendation2";
import { Recommendation3 } from "./Recommendation3";
import { WatchList } from "./WatchList";
import { More } from "./More";
import { Questionaries } from "./Questionaries";
import { ProgressQuestionaries } from "./ProgressQuestionaries";
import { Meetings } from "./Meetings";
import { MeetingDetails } from "./MeetingDetails";
import { Applications } from "./Applications";
import { Announcements } from "./Announcements";
import { Profile } from "./Profile";
import { UserInterests } from "./UserInterests";
import {NewMeeting} from './NewMeeting';
import {ForgetPassword} from './ForgetPassword';
import {UniversitiesDetails} from './UniversitiesDetails';
import { UniversitiesStdLife } from "./UniversitiesStdLife";
import { UniversitiesVisa } from "./UniversitiesVisa";
import { UniversitiesPrograms } from './UniversitiesPrograms';
import { UniversitiesFinance } from './UniversitiesFinance';
import { UniversitiesPostGraduation } from './UniversitiesPostGraduation';
import { UniversitiesCompare } from './UniversitiesCompare';
import { UniversitiesSummary } from './UniversitiesSummary';
import { AddApplication } from './AddApplication';
import { Settings } from "./Settings";
import { SecuritySettings } from "./SecuritySettings";
import { Preference } from "./Preference";
import { Support } from "./Support";
import { AuthContextProvider , useAuthState } from "./firebase";

const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`AuthenticatedRoute: ${isAuthenticated}`)
    return (
      <Route
        {...props}
        render={routeProps =>
          isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
        }
      />
    )
  }
  const UnauthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
    return (
      <Route
        {...props}
        render={routeProps =>
          !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/dashboard" />
        }
      />
    )
  }
export default class Routes extends Component {
    render() {
        return (
            <AuthContextProvider>
            <Router history={history}>
                <Switch>
                    <UnauthenticatedRoute exact path="/" component={App} />
                    <UnauthenticatedRoute exact path="/forget-password" component={ForgetPassword} />
                    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
                    <AuthenticatedRoute exact path="/universities" component={Universities} />
                    <AuthenticatedRoute exact path="/recommender" component={Recommendation} />
                    <AuthenticatedRoute exact path="/recommender-1" component={Recommendation1} />
                    <AuthenticatedRoute exact path="/recommender-2" component={Recommendation2} />
                    <AuthenticatedRoute exact path="/recommender-3" component={Recommendation3} />
                    <AuthenticatedRoute exact path="/watchlist" component={WatchList} />
                    <AuthenticatedRoute exact path="/more" component={More} />
                    <AuthenticatedRoute exact path="/questionnaire" component={Questionaries} />
                    <AuthenticatedRoute exact path="/progress-questionnaire" component={ProgressQuestionaries} />
                    <AuthenticatedRoute exact path="/meetings" component={Meetings} />
                    <AuthenticatedRoute exact path="/meeting-details" component={MeetingDetails} />
                    <AuthenticatedRoute exact path="/applications" component={Applications} />
                    <AuthenticatedRoute exact path="/announcements" component={Announcements} />
                    <AuthenticatedRoute exact path="/profile" component={Profile} />
                    <AuthenticatedRoute exact path="/user-interests" component={UserInterests} />
                    <AuthenticatedRoute exact path="/new-meeting" component={NewMeeting} />
                    <AuthenticatedRoute exact path="/University-general" component={UniversitiesDetails} />
                    <AuthenticatedRoute exact path="/University-student-life" component={UniversitiesStdLife} />
                    <AuthenticatedRoute exact path="/University-visa-information" component={UniversitiesVisa} />
                    <AuthenticatedRoute exact path="/University-programs" component={UniversitiesPrograms} />
                    <AuthenticatedRoute exact path="/University-Finance" component={UniversitiesFinance} />
                    <AuthenticatedRoute exact path="/University-post-graduation" component={UniversitiesPostGraduation} />
                    <AuthenticatedRoute exact path="/University-compare" component={UniversitiesCompare} />
                    <AuthenticatedRoute exact path="/University-summary" component={UniversitiesSummary} />
                    <AuthenticatedRoute exact path="/add-application" component={AddApplication} />
                    <AuthenticatedRoute exact path="/account-settings" component={Settings} />
                    <AuthenticatedRoute exact path="/security-settings" component={SecuritySettings} />
                    <AuthenticatedRoute exact path="/preferences" component={Preference} />
                    <AuthenticatedRoute exact path="/support-contact-us" component={Support} />
                </Switch>
            </Router>
            </AuthContextProvider>
        )
    }
}