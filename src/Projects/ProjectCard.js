import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';




function ProjectCard({Projects}) {
  return (
    <Card className='projectcard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Projects.img} />
      <Card.Body>
        <Card.Title>{Projects.name}</Card.Title>
        <Card.Text>
          {Projects.discription}
        </Card.Text>
      </Card.Body>
      <ListGroup style={{display:"flex",flexDirection:"column", alignItems:'start', marginLeft:"1.5rem"}} className="list-group-flush">
        <ListGroup.Item>Stack : {Projects.stack}</ListGroup.Item>
        <ListGroup.Item>Styling : {Projects.styling}</ListGroup.Item>
        <ListGroup.Item>Cloud : {Projects.cloud} </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{display: "flex",justifyContent:"space-evenly", margin:"1rem"}}>
        <Card.Link href={Projects.sourcecodefrontend} target="_blank" rel='noopener noreferrer' ><GitHubIcon /></Card.Link>
        <Card.Link href={Projects.deployedurlfrontend} target="_blank" rel='noopener noreferrer'><LaunchIcon/></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;