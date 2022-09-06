import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from '@mui/material';
const CardEL = ({ title, coverPhoto, author, datePublished, slug }) => {
    return (
        <Grid padding={1} container>
            <Card sx={{ width: "100%" }}>
                {
                    author &&
                    <Link to={`/authors/${author.slug}`} style={{textDecoration:"none"}}>
                        <CardHeader
                            avatar={
                                <Avatar src={author.avatar.url} sx={{ marginLeft: 1 }} />
                            }
                            title={author.name}
                            subheader={datePublished}
                        />
                    </Link>
                }
                <CardMedia
                    component="img"
                    height="194"
                    image={coverPhoto.url}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" fontWeight={700} color="text.secondary">
                        {title}
                    </Typography>
                </CardContent>
                <Divider variant='middle' sx={{ margin: 1 }} />
                <CardActions>
                    <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
                        <Button variant='outlined' size='small' sx={{ width: "100%", borderRadius: 3 }}>
                            مطالعه مقالات
                        </Button>
                    </Link>
                </CardActions>
            </Card>

        </Grid>
    )
}

export default CardEL;