import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";

export default function MainCard({ image, title, price, reviews, stars }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        height: "auto",
        padding: "5px",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          loading="lazy"
          sx={{
            objectFit: "contain",
            minHeight: 200,
            maxHeight: 200,
            width: "100%",
            padding: 2,
            transition: "transform 0.1s",
            "&:hover": {
              transform: "scale(1.05)", // or any other effect you want
            },
          }}
        />
        <CardContent sx={{ paddingY: "5px" }}>
          <Box>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                "&:hover": {
                  textDecorationLine: "underline",
                },
              }}
              variant="button"
              component="div"
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Box>
              <Rating
                name="read-only"
                sx={{ display: "flex", justifyContent: "center" }}
                value={stars}
                readOnly
              />
            </Box>
            <Box>
              <Typography
                sx={{ display: "flex", justifyContent: "center" }}
                variant="caption"
              >
                {reviews} Reviews
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              variant="body2"
              color="text.secondary"
            >
              ${price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
