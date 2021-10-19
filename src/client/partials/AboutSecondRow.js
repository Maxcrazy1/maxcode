import React from "react";
import { Col } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  titleCard: {
    fontFamily: "Kollektif",
    textAlign: "center",
  },

  contentDescription: {
    paddingRight: "4rem",
    textAlign: "justify",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
      marginBottom: "2rem",
    },
  },
  textDescription: {
    fontFamily: "Kollektif",
    fontSize: "18px",
  },
  titleMain: {
    textTransform: "uppercase",
    opacity: "1 !important",
    fontFamily: "Norwester",
    marginBottom: 0,
    display: "inline",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
mxAuto:{
    marginLeft:"auto",
    marginRight:"auto"
  },
  mt4:{
    marginTop:"2rem"  
  }

}));

const AboutSecondRow = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Col xs={12} sm={12} md={6}>
        <Card>
          <CardContent>
            <Typography
              className={classes.titleCard}
              color="textSecondary"
              gutterBottom
            >
              Educación
            </Typography>

            <Timeline align="left">
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Universitaria 2017 - 2019
                  </Typography>
                  <Typography>IUTA VEN</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Secundaria 2012 - 2016
                  </Typography>
                  <Typography>U.E.P Francisco de Miranda</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Primaria 2006 - 2012
                  </Typography>
                  <Typography>Abigail González</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
        <Card className={classes.mt4}>
          <CardContent>
            <Typography
              className={classes.titleCard}
              color="textSecondary"
              gutterBottom
            >
              Cursos
            </Typography>

            <Timeline align="left">
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    2021
                  </Typography>
                  <Typography>Laravel TDD + Dusk</Typography>
                  <Typography>October Framework</Typography>
                  <Typography>Ruby on Rails</Typography>
                  <Typography>Typescript</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    2020
                  </Typography>
                  <Typography>React</Typography>
                  <Typography>Nodejs + Express</Typography>
                  <Typography>Integración de apis</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    2019
                  </Typography>
                  <Typography>Laravel</Typography>
                  <Typography>Wordpress</Typography>
                  <Typography>Jquery</Typography>
                  <Typography>Vue</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    2018
                  </Typography>
                  <Typography>PHP + Mysql</Typography>
                  <Typography>HTML + Css + Js Basic Pack</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </Col>
      <Col xs={12} sm={12} md={6}>
        <Card className={classes.mt4}>
          <CardContent>
            <Typography
              className={classes.titleCard}
              color="textSecondary"
              gutterBottom
            >
              Habilidades profesionales
            </Typography>

            <List dense={true}  subheader={<li />}>
              <li className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader>Backend</ListSubheader>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://styles.redditmedia.com/t5_2uakt/styles/communityIcon_fmttas2xiy351.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Laravel"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={90}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://cdn.iconscout.com/icon/free/png-256/php-99-1175127.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="PHP"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={85}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://i.pinimg.com/originals/96/b6/6f/96b66fc862b74edd5ad9e89cc7ccdbb0.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Mysql"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={85}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto} 
                        alt="icon"
                        src="https://cdn.iconscout.com/icon/free/png-256/ruby-226055.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Ruby"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={35}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Firebase"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://justcodeit.io/wp-content/uploads/Git_icon.svg_.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="GIT"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={80}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://icon-library.com/images/terminal-icon/terminal-icon-1.jpg"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Unix/Shell"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1022px-Vimlogo.svg.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="VIM"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={80}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://image.flaticon.com/icons/png/512/919/919844.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Visual Basic"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={85}
                        />
                      }
                    />
                  </ListItem>
                  <ListSubheader>Frontend</ListSubheader>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
                      ></Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary="React"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={70}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Typescript"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={40}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://cdn.iconscout.com/icon/free/png-256/javascript-23-1174949.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Javascript / Jquery"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={90}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto}
                        alt="icon"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tailwind-css.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="CSS / Bootstrap / Materialize / Tailwind"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={90}
                        />
                      }
                    />
                  </ListItem>

                  <ListSubheader>Movíl</ListSubheader>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classes.mxAuto} 
                        alt="icon"
                        src="https://miro.medium.com/max/525/1*mrOXGyIa3BlPK80peLmEbA.png"
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="React Native"
                      secondary={
                        <BorderLinearProgress
                          variant="determinate"
                          value={30}
                        />
                      }
                    />
                  </ListItem>
                </ul>
              </li>
            </List>
          </CardContent>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AboutSecondRow;
