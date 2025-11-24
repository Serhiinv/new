import { Box, IconButton, Modal, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";

interface InfoModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function InfoModal({ open, onClose, title = "More info here", children }: InfoModalProps) {
    const theme = useTheme();

    const styles = useMemo(
        () => ({
            modal: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            modalContent: {
                backgroundColor: theme.palette.background.paper,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 3, 1),
                width: '80%',
                maxWidth: '600px',
                position: 'relative' as const,
                maxHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
                animation: 'modalScaleIn 0.3s ease-out',
                '@keyframes modalScaleIn': {
                    from: {
                        opacity: 0,
                        transform: 'scale(0.5)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                },
            },
            closeButton: {
                backgroundColor: "black",
                transition: 'transform 0.2s ease-in-out',
                "&:hover": {
                    backgroundColor: "black",
                    transform: 'scale(0.9)'},
                position: 'absolute' as const,
                width: '50px',
                height: '50px',
                color: theme.palette.background.paper,
                top: -20,
                right: -20,
                zIndex: 1,
            },
            modalScrollableContent: {
                overflowY: 'auto' as const,
                paddingRight: theme.spacing(1),
            },
        }),
        [theme]
    );

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="info-modal-title"
            aria-describedby="info-modal-description"
            sx={styles.modal}
            closeAfterTransition
        >
            <Fade in={open} timeout={300}>
                <div>
                    <Box sx={styles.modalContent}>
                        <IconButton
                            onClick={onClose}
                            sx={styles.closeButton}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            id="info-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{mb: 2}}
                        >
                            <strong>{title}</strong>
                        </Typography>
                        <Box sx={styles.modalScrollableContent} id="info-modal-description">
                            {children}
                        </Box>
                    </Box>
                </div>
            </Fade>
        </Modal>
    );
}
