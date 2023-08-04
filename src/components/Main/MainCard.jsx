import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MainCard({ image, title, price }) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          sx={{
            objectFit: "contain",
            minHeight: 200,
            maxHeight: 200,
            width: "100%",
          }}
        />
        <CardContent>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            gutterBottom
            variant="button"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
