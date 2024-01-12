
import Card from 'react-bootstrap/Card';

const Players = ({ name, team, nationality, jerseynumber, age, imageUrl }) => {
    Players.defaultProps = {
        name: "Unknown",
        team: "Not specified",
        nationality: "Unknown",
        jerseyNumber: "N/A",
        age: "N/A",
        imageUrl: "https:noway",
      };
  return (
    <Card className="card-container">
      <Card.Img
        varian t="top"
        src={imageUrl}
        alt={name}
        className="card-image"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseynumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Players;
