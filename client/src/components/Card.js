import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


export default function BasicCard({name,reference,image,description,category,price}) {
  return (
    <Card variant="outlined" sx={{ width: 320 ,margin: 2}}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
       Name: {name}
      </Typography>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
       Category: {category}
      </Typography>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
       Reference: {reference}
      </Typography>
      <Typography level="body2">Description: {description}</Typography>
      {/* <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton> */}
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={image}
          srcSet={image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          {price} DT 
          </Typography>
        </div>
        {/* <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Explore
        </Button> */}
      </Box>
    </Card>
  );
}