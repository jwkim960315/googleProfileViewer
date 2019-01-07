import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, signOut, signInErr } from "../actions";
import { Button } from "@material-ui/core";

const styles = {
    signInButton: {
        flexGrow: 1,
        color: "inherit"
    }
};



class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId: "318990435965-vfvab619el1pob93lvt1v2ipamf9apf7.apps.googleusercontent.com",
                    scope: "email profile"
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getBasicProfile());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn().then(undefined, err => {
            switch (err.error) {
                case "popup_closed_by_user":
                    this.props.signInErr(
                        "You have stopped from signing in. Please click sign in button and choose a Gmail account."
                    );
                    return;
                case "access_denied":
                    this.props.signInErr(
                        "The account you are trying to access is denied by the user. Please choose another account."
                    );
                    return;
                case "immediate_failed":
                    this.props.signInErr("signInOption has an entry prompt as none.");
                    return;
                default:
                    this.props.signInErr("Unknown Error Occurred.");
                    return;
            }
        });
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton(classes, userProfileLink, homeLink) {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <Button
          component={homeLink}
          to="/"
          onClick={this.onSignOutClick}
          className={classes.signInButton}
        >
          Sign Out
        </Button>
            );
        } else {
            return (
                <Button
          component={userProfileLink}
          to="/userProfile"
          onClick={this.onSignInClick}
          className={classes.signInButton}
        >
          Sign In
        </Button>
            );
        }
    }

    render() {
        const { classes } = this.props;
        const userProfileLink = props => <Link to="/userProfile" {...props} />;
        const homeLink = props => <Link to="/" {...props} />;
        return (
            <div>{this.renderAuthButton(classes, userProfileLink, homeLink)}</div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps, { signIn, signOut, signInErr }
)(withStyles(styles)(GoogleAuth));