import React from "react";
import { connect } from "react-redux";
import {
  withStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Divider
} from "@material-ui/core";
import moment from "moment";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    width: "70%"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center"
  },
  errMessage: {
    display: "flex",
    justifyContent: "center"
  }
};

class UserProfile extends React.Component {
  render() {
    const { classes } = this.props;

    if (!this.props.isSignedIn) {
      if (this.props.errMessage) {
        return (
          <div className={classes.errMessage}>
            <p>{this.props.errMessage}</p>
          </div>
        );
      } else {
        return <div />;
      }
    }

    const username = this.props.userEmail
      ? this.props.userEmail.slice(0, this.props.userEmail.indexOf("@"))
      : null;

    return (
      <Grid className={classes.root}>
        <Card className={classes.card} raised>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar
                alt={username}
                src={this.props.userImageUrl}
                className={classes.avatar}
              />
            }
            title={username}
            subheader={`Log in date & time: ${moment().format(
              "MMM DD, YYYY HH:mm:SS"
            )}`}
          />
          <Divider variant="middle" />
          <CardContent>
            <Typography>User Name: {this.props.userFullName}</Typography>
            <Typography>User Email: {this.props.userEmail}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userFullName: state.auth.userFullName,
    userEmail: state.auth.userEmail,
    userImageUrl: state.auth.userImageUrl,
    errMessage: state.err.errMessage
  };
};

export default connect(mapStateToProps)(withStyles(styles)(UserProfile));
