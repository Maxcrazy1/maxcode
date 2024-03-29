import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Col,Row } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import PassionChip from "../components/PassionChip";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "0 auto",
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
  titleCard: {
    fontFamily: "Kollektif",
    textAlign: "center",
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
  loaderCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  leftAlignTimeLine: {
    width: 0,
  },
  textCenter: {
    textAlign:'center'
  },
  mt4:{
    marginTop:"2rem"
  },
  mtb4:{
    marginTop:"2rem",
    marginBottom:"4rem",
  }
}));




const AboutThirdRow = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Col xs={12} sm={12} md={6}>
        <Card className={classes.mt4}>
          <Typography
            className={classes.titleCard}
            color="textSecondary"
            gutterBottom
          >
            Hobbies e Intereses
          </Typography>
          <CardContent className={classes.textCenter}>
            <PassionChip />
          </CardContent>
        </Card>
        <Card className={classes.mt4}>
          <CardContent>
            <Typography
              className={classes.titleCard}
              color="textSecondary"
              gutterBottom
            >
              Idiomas
            </Typography>

            <Row>
              <Col className={classes.textCenter} xs={12} md={6}>
                <Typography>Español Nativo</Typography>
                <CircularProgressWithLabel value={100}/>
              </Col>
              <Col className={classes.textCenter} xs={12} md={6}>
                <Typography>Ingles B2 - C1</Typography>
                <CircularProgressWithLabel value={60}/>
              </Col>
            </Row>
          </CardContent>
        </Card>
      </Col>

      <Col xs={12} sm={12} md={6} className={classes.mtb4}>
        <Card>
          <CardContent>
            <Typography
              className={classes.titleCard}
              color="textSecondary"
              gutterBottom
            >
              Referencias y experiencias
            </Typography>

            <Row>
              <Col className={classes.textCenter} xs={12} md={4}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.freelancer.com/u/serranocristian9"
                >
                  <Avatar
                    alt="Freelancer"
                    src="https://pbs.twimg.com/profile_images/771214542231568387/UHj3IdCU_400x400.jpg"
                    className={classes.large}
                  />
                  <Typography color="textSecondary" className>
                    Freelancer
                  </Typography>
                </a>
              </Col>
              <Col className={classes.textCenter} xs={12} md={4}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.workana.com/freelancer/cb5160fa0f884e46a21e7c1ac0e81e54"
                >
                  <Avatar
                    alt="Workana"
                    src="https://play-lh.googleusercontent.com/aFN7k9MvsR28UbHFZZDdHvE_9jP7ryUWrYsXaRAAQomBZ8d05jRIAeykfbiaeGKSxw4=s256-rw"
                    className={classes.large}
                  />
                  <Typography color="textSecondary" className>
                    Workana
                  </Typography>
                </a>
              </Col>
              <Col className={classes.textCenter} xs={12} md={4}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/criserrano/"
                >
                  <Avatar
                    alt="Linkedin"
                    src="https://www.svgrepo.com/show/303299/linkedin-icon-2-logo.svg"
                    className={classes.large}
                  />
                  <Typography color="textSecondary" className>
                    Linkedin
                  </Typography>
                </a>
              </Col>
            </Row>
          </CardContent>
        </Card>
      </Col>
    </React.Fragment>
  );
};


export default AboutThirdRow;
