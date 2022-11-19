import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';


const details = [
  {
    img: "https://schools.olympiadsuccess.com/assets/images/schools_board/board_25.png",
    board: "SSC",
    secured: "89.33%",
    passingyear: "2011"
  },
  {
    img: "https://schools.olympiadsuccess.com/assets/images/schools_board/board_25.png",
    board: "HSC",
    secured: "72.33%",
    passingyear: "2013"
  },
  {
    img: "https://static.toiimg.com/photo/msid-71451227/71451227.jpg",
    board: "Pune University(B.E.) - ECE",
    secured: "Higher Second Class",
    passingyear: "2020"
  },
  {
    img: "https://play-lh.googleusercontent.com/lAFgx9P9v6g9CGiJ4yXEghRTGikQg88xuxOg30t_licriW4ODAyXVK4NHBJj-HGILw",
    board: "MERN stack course - GUVI",
    secured: "6th in Class",
    passingyear: "2022"
  },
  
]


export default function Education() {
  return (
    <div className='educationmain'>
      <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString(
                  '<h1 style="color:#138808">Eduction:</h1>'
                )
                .pauseFor(300)
                
                
                .start();
            }}
          />
      <div className='educationdetails'>
        <Card className='educationcard' sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={details[0].img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[0].board}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Secured: {details[0].secured}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Passing Year: {details[0].passingyear}
            </Typography>
          </CardContent>
      
        </Card>
        <Card className='educationcard' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={details[1].img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details[1].board}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Secured: {details[1].secured}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Passing Year: {details[1].passingyear}
          </Typography>
        </CardContent>
      
      </Card>
      <Card className='educationcard' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={details[2].img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details[2].board}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Secured: {details[2].secured}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Passing Year: {details[2].passingyear}
          </Typography>
        </CardContent>
      
      </Card>
      <Card className='educationcard' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={details[3].img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details[3].board}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Secured: {details[3].secured}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Passing Year: {details[3].passingyear}
          </Typography>
        </CardContent>
      
      </Card>
      </div>
    </div>
  );
}
