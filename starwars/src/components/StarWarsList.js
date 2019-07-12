import React from "react";
import { Container, Grid } from "semantic-ui-react";
const StarWarsList = props => {
  return (
    <Container textAlign="center">
      <Grid container={true} columns="3" padded={true} centered={true}>
        <div>
          {props.Data.map((item, i) => (
            <div key={i}>
              <Grid.Row style={{background:'grey'}} color="grey">
                <Grid.Column color='red' width="3" columns="3" divided={true}>
                  <div style={{margin:'2%'}} class="ui card">
                    <div class="content">
                      <div class="header">{item.name}</div>
                      <div class="meta">{item.birth_year}</div>
                      <div class="description">
                        <p>
                          eye color:{" "}
                          <span style={{ color: `${item.eye_color}` }}>
                            {item.eye_color}
                          </span>
                        </p>
                        <p>height:{item.height}</p>
                        <p>hair color:{item.hair_color}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <i class="check icon" />
                      {item.mass}
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </div>
          ))}
        </div>
      </Grid>
    </Container>
  );
};

export default StarWarsList;
