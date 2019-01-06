import React from "react";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = {
    title: {
        marginBottom: 30
    },
    description: {
        fontSize: 18
    }
};

const HomeTitle = props => {
    const { classes } = props;
    return (
        <div>
      <Typography className={classes.title} variant="h2" align="center">
        Google Profile Viewer
      </Typography>
      <Typography className={classes.description} align="center">
        View your Google account profile by logging into this website!
        <br />
        <br />
        Example Template is below:
      </Typography>
    </div>
    );
};

export default withStyles(styles)(HomeTitle);