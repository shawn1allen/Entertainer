import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; import './PlayButton.css'

function PlayButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="play-button-container">
      <IconButton className="play-button" color="primary" onClick={handleOpen} sx={{ fontSize: '4rem', padding: '30px', marginTop: '80px', border: '2px solid', borderRadius: '50%', color: 'white' }}>
        <PlayArrowIcon fontSize="inherit" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {/* Embedded YouTube video with responsive dimensions */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/olc9DIlkGmw?autoplay=1"
            title="The Entertainer CTV Revised"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </Dialog>
    </div>
  );
}

export default PlayButton;
