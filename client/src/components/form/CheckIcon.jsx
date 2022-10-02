import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((props) => ({
	iconContainer: {
		position: "relative",
	},
	icon: {
		position: "absolute",
		top: 1,
		left: -18,
		opacity: 0,
		transition: [["opacity", "0.5s"]],
		width: "1rem",
		height: "1rem",
		color: props?.errorColor,
	},
	iconVisible: {
		color: props?.successColor,
		opacity: "100%",
	},
}));

const CheckIcon = (props) => {
	const classes = useStyles(props);

	return (
		<div className={classes.iconContainer}>
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="512.000000pt"
				height="512.000000pt"
				viewBox="0 0 512.000000 512.000000"
				preserveAspectRatio="xMidYMid meet"
				className={
					props.checked
						? classes.icon + " " + classes.iconVisible
						: classes.icon
				}
			>
				<g
					transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
					fill="currentColor"
					stroke="none"
				>
					<path
						d="M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594
-662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31
-565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220
412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 276 45
498 116 745 237 269 132 460 269 681 489 220 221 357 412 489 681 88 179 132
296 180 476 63 240 78 371 78 649 0 278 -15 409 -78 649 -48 180 -92 297 -180
476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193
-740 235 -147 23 -475 34 -615 20z m1619 -1403 c74 -49 106 -155 71 -237 -12
-30 -1562 -1784 -1631 -1847 -52 -47 -158 -59 -216 -23 -37 22 -971 766 -1021
814 -48 44 -65 83 -65 146 0 78 40 143 112 180 27 14 104 18 144 7 15 -4 219
-161 453 -348 234 -187 431 -342 438 -345 8 -3 311 330 747 821 543 611 744
830 774 846 56 28 139 23 194 -14z"
					/>
				</g>
			</svg>
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="512.000000pt"
				height="512.000000pt"
				viewBox="0 0 512.000000 512.000000"
				preserveAspectRatio="xMidYMid meet"
				className={classes.icon + " " + classes.iconVisible}
			>
				<g
					transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
					fill="currentColor"
					stroke="none"
				>
					<path
						d="M2285 4675 c-536 -71 -1019 -339 -1377 -765 -147 -175 -295 -447
-372 -681 -75 -229 -106 -422 -106 -669 0 -247 31 -440 106 -669 151 -461 457
-854 879 -1131 178 -116 454 -231 675 -280 211 -47 495 -63 705 -40 382 43
751 191 1065 428 181 137 403 387 530 596 274 455 367 1019 254 1546 -66 308
-198 591 -397 855 -73 96 -265 290 -363 367 -311 245 -700 405 -1086 447 -128
14 -388 12 -513 -4z m414 -415 c602 -54 1115 -401 1385 -937 242 -481 242
-1042 0 -1524 -100 -201 -239 -383 -395 -518 -534 -463 -1269 -557 -1894 -244
-691 347 -1063 1115 -905 1870 163 781 838 1338 1650 1362 25 0 96 -4 159 -9z"
					/>
				</g>
			</svg>
		</div>
	);
};

export default CheckIcon;
