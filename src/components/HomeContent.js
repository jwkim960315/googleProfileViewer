import React from "react";
import {
    withStyles,
    Avatar,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography
} from "@material-ui/core";
import moment from "moment";

const styles = {
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: 80
    },
    card: {
        width: "70%"
    },
    cardHeader: {
        display: "flex",
        justifyContent: "center"
    }
};

const HomeContent = props => {
    const { classes } = props;
    return (
        <Grid className={classes.root}>
        <Card className={classes.card} raised>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar className={classes.avatar} alt="Example Avatar">
                <i className="fas fa-user" />
              </Avatar>
            }
            title="Username"
            subheader={`Log in date & time: ${moment().format(
              "MMM DD, YYYY HH:mm:SS"
            )}`}
          />
          <Divider variant="middle" />
          <CardContent>
            <Typography>User Name: Username</Typography>
            <Typography>User Email: example@gmail.com</Typography>
          </CardContent>
        </Card> 
      </Grid>
    );
};

export default withStyles(styles)(HomeContent);