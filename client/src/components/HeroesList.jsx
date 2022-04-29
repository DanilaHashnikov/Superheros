import React from 'react';

const HeroesList = () => {
    return (
        <>
            {heroes ?
                heroes.map((hero) => (
                    <Card key={hero._id} sx={{ maxWidth: 800 }}>
                        <CardMedia
                            component="img"
                            alt="superhero photo"
                            height="145"
                            image=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {hero.nickname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span
                                    style={{ color: '#bb1133' }}
                                >
                                    Description:
                                </span>
                                {hero.origin_description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><NavLink to={`/superheroes/${hero._id}`}>Learn More</NavLink></Button>
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                ))
                : <div>loading</div>
            }
        </>
    );
};

export default HeroesList;