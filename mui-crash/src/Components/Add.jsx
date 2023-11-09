import {
  Fab,
  Modal,
  Tooltip,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "roboto",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon></AddIcon>
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" textAlign="center" color="grey">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="/src/assets/palestine_silk.jpg" />
            <Typography fontWeight={500} variant="span">
              Psych
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary"></EmojiEmotionsIcon>
            <PhotoSizeSelectActualIcon color="secondary"></PhotoSizeSelectActualIcon>
            <VideoCameraBackIcon color="warning"></VideoCameraBackIcon>
            <PersonAddAlt1Icon color="success"></PersonAddAlt1Icon>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon></DateRangeIcon>
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
