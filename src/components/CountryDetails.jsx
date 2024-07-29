import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
        setLoading(false)
    })
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return (
    <>
    
        <div className="details-container">
            {error && error.message}
            {!loading && info.length ? (
                <Card  className="details-card">
                    <CardMedia
                        component="img"
                        sx={{ aspectRatio: 16 / 9 }}
                        image={info[0]?.flags?.svg}
                        alt={info[0]?.name?.common}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" textAlign='center' fontWeight='bold' height='auto'>
                            <p className="country-desc">Страна: {info[0]?.name?.common}</p>
                            <p className="country-desc">Столица: {info[0]?.capital}</p>
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                !error ? <h2>Loading...</h2> : null
                )}
        </div>
    </>
  );
};
