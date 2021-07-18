import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Badge from "@material-ui/core/Badge";

const StyledBadge = withStyles((theme) => ({
  root: {
    verticalAlign: "initial",
  },

  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

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
}));

const AboutFirstRow = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Col xs={12} sm={12} md={12} className="mb-4">
        <Typography variant="h2" className={classes.titleMain} gutterBottom>
          Cristian Serrano
        </Typography>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            alt="Cristian Serrano"
            src="https://cdn3.f-cdn.com/ppic/132863215/logo/23955762/QnRA0/profile_logo_.jpeg"
          />{" "}
        </StyledBadge>
        <div>
          <ReactTypingEffect
            data-aos="fade-up"
            className={classes.titleFont}
            speed={60}
            eraseSpeed={70}
            typingDelay={500}
            text={[
              "Siempre buscando mi siguiente nivel 🐺🏅",
              "Enamorado del clean code 😍✒️",
              "100% fan del deporte 🚵🏀⚽🕺",
              "Soy Cristian Serrano 🤡👾👽🤙",
            ]}
          />
        </div>
      </Col>

      <Col xs={12} sm={12} md={8}>
        <div className={classes.contentDescription}>
          <Typography className={classes.textDescription}>
            Me he vuelto un aficionado del código desde hace unos cuantos años
            atras, lo que me ha impulsado a enfretarme a muchos desafios 🤔, sin
            embargo siempre tomo en cuenta una frase: "Algún día diré: 'estuvo
            complejo, pero lo logré'". En mi viaje 🛫 seguiran habiendo muchos
            peldaños que seguir subiendo, aún así lo hago con animo 🤩💪, porque
            me encanta desarrollar aplicaciones, sistemas y soluciones
            modulares, prolijas y escalables ✅💻📱
          </Typography>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4}>
        <Card className="mb-4">
          <CardContent>
            <Row>
              <Col md={12}>
                <Typography
                  className={classes.titleCard}
                  color="textSecondary"
                  gutterBottom
                >
                  Lo que hago
                </Typography>
              </Col>
              <Col xs={6} className="text-center mb-4">
                <Avatar
                  className="mx-auto"
                  alt="icon"
                  src="https://image.flaticon.com/icons/png/128/2210/2210159.png"
                ></Avatar>
                <Typography>Desarrollo web</Typography>
              </Col>
              <Col xs={6} className="text-center mb-4">
                <Avatar
                  className="mx-auto"
                  alt="icon"
                  src="https://image.flaticon.com/icons/png/128/2920/2920329.png"
                ></Avatar>
                <Typography>Desarrollo movíl</Typography>
              </Col>
              <Col xs={6} className="text-center">
                <Avatar
                  className="mx-auto"
                  alt="icon"
                  src="https://image.flaticon.com/icons/png/128/2752/2752571.png"
                ></Avatar>
                <Typography>Desarrollo de escritorio</Typography>
              </Col>
              <Col xs={6} className="text-center">
                <Avatar
                  className="mx-auto"
                  alt="icon"
                  src="https://image.flaticon.com/icons/png/128/2721/2721305.png"
                ></Avatar>
                <Typography>UI & UX Design</Typography>
              </Col>
            </Row>
          </CardContent>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AboutFirstRow;
