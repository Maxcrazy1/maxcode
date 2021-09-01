import React from "react";
import { Nav } from "react-bootstrap";
import GrainIcon from "@material-ui/icons/Grain";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import Tooltip from '@material-ui/core/Tooltip';
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	sidebar:{
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		minHeight: '100vh !important',
		zIndex: '100',
		padding: '48px 0 0',
		boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .1)',
		paddingRight: 0,	
		backgroundColor:'#f8f9fa',
      [theme.breakpoints.down("md")]: {
				display: 'block'
      },
	},
	verticalCenter :{
    margin: 0,
    position: 'absolute',
    top: '50vh',
    left: '1.3vh',
    '-ms-transform': 'translateY(-50%)',
    transform: 'translateY(-50%)',
},
	mt2:{
		marginTop: ".5rem !important"
	},



}));

	export default function Sidebar() {
		const classes = useStyles();
		const path = window.location.pathname;
		return (
			<>
				<Nav className={classes.sidebar} activeKey="/home">
					<div className={classes.verticalCenter}>
						<Tooltip title="Quien soy?"><Nav.Item className={classes.mt2} >
							<Link to="/about">
								<EmojiPeopleIcon style={path==='/about'?{fill:'#ff2e63'}: {fill: "#08d9d6"} }/>
							</Link>
						</Nav.Item></Tooltip>
						<Tooltip title="Proyectos"><Nav.Item className={classes.mt2}>
							<Link to="/">
								<GrainIcon style={path==='/'?{fill:'#ff2e63'}: {fill: "#08d9d6"} } />
							</Link>
						</Nav.Item></Tooltip>
						<Tooltip title="Contacto"><Nav.Item className={classes.mt2}>
							<Link to="/contact">
								<QuestionAnswerIcon style={path==='/contact'?{fill:'#ff2e63'}: {fill: "#08d9d6"} }/>
							</Link>
						</Nav.Item></Tooltip>
					</div>
				</Nav>
			</>
		);
	}
