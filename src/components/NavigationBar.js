import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import GoogleAuth from "./GoogleAuth";

const styles = {
  root: {
    marginBottom: 140,
    flexGrow: 1
  },
  signInButton: {
    flexGrow: 1
  },
  homeButton: {
    marginLeft: 12
  }
};

class NavigationBar extends React.Component {
  render() {
    const { classes } = this.props;
    const homeLink = props => <Link to="/" {...props} />;
    const profileLink = props => <Link to="/userProfile" {...props} />;

    const profileButton = this.props.isSignedIn ? (
      <Button
        color="inherit"
        component={profileLink}
        className={classes.profileButton}
      >
        Profile
      </Button>
    ) : (
      <div className={classes.profileButton} />
    );

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar variant="regular">
            <Typography variant="h6">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                GPV
              </Link>
            </Typography>
            <Button
              color="inherit"
              component={homeLink}
              className={classes.homeButton}
            >
              Home
            </Button>
            {profileButton}
            <Typography className={classes.signInButton} />
            <GoogleAuth />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(withStyles(styles)(NavigationBar));
