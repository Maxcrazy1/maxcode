import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    background: "linear-gradient(to left, #FFF, #ECE9E6)",
  },
  colorTitleCard: {
    color: "#09a29f",
    [theme.breakpoints.down("xs")]: {
      width: "65%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  borderGradient: {
    borderStyle: "solid",
    borderWidth: "7px",
    borderImage: "conic-gradient(#08d9d6,#ff2e63,#08d9d6) 1",
    [theme.breakpoints.down("xs")]: {
      marginBottom: '5rem',
    },

  },
 
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline className={classes.borderGradient} align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          👨‍💻💎
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Avatar
              alt="Linkedin"
              src="https://www.grupatra.org/wp-content/uploads/2020/05/icon-linkedin.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/serranocristian/"
            >
              <Typography
                className={classes.colorTitleCard}
                variant="h6"
                component="h2"
              >
                Linkedin
              </Typography>
            </a>
            <Typography >Comunicación con empresas 🏢</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            ¡Dejame un mensaje!
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Avatar
              alt="Freelancer"
              src="https://pbs.twimg.com/profile_images/771214542231568387/UHj3IdCU_400x400.jpg"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.freelancer.com/u/serranocristian9"
            >
              <Typography
                className={classes.colorTitleCard}
                variant="h6"
                component="h1"
              >
                Free
              </Typography>
            </a>
            <Typography >Guía y apoyo 👨‍💻🔥</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">Doing us 🤝</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <Avatar
              alt="Workana"
              src="https://pbs.twimg.com/profile_images/1212755512749625352/XKvflqnf_400x400.jpg"
            />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.workana.com/freelancer/cb5160fa0f884e46a21e7c1ac0e81e54"
            >
              <Typography
                className={classes.colorTitleCard}
                variant="h6"
                component="h1"
              >
                Workana
              </Typography>
            </a>
            <Typography>Soluciones 🔧</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Avatar
              alt="Gmail"
              src="https://i.pinimg.com/originals/2f/15/75/2f15756130fb91c8ac4347544992f340.png"
            />
          </TimelineDot>

          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
	  <a 
              target="_blank"
              rel="noopener noreferrer"
	  href="https://mail.google.com/mail/?view=cm&fs=1&to=serranocristian9@gmail.com&su=Un proyecto o solución a desarrollar 🚀&body=Indique sus requerimientos&"><Typography
	  className={classes.colorTitleCard}
	  variant="h6"
	  component="h1"
	  >
	  Gmail
	  </Typography></a>
            <Typography>El clasico email 💎</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              className={classes.colorTitleCard}
              variant="h6"
              component="h1"
            >
              Mis opciones
            </Typography>
            <Typography>
              ¡Hablemos por alguna de ellas!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
