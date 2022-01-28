import { Grid} from "@mui/material";
import {MyCard as Card} from "../UI/Card";

const Cards = ({ data }) => {
  return (
    <div>
      <Grid container>
        {data.map((item,key) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={key}>
              <Card item={item}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
