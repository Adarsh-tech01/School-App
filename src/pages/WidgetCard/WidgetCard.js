import { useState } from 'react';
import { Card, CardHeader, Divider, Typography, Avatar, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WidgetCard = ({ title, subTitle, icon, action, body, expandable, onExpand, bodyPadding = 1.5, ...other }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  let avatar = null;
  if (icon) {
    avatar = <Avatar sx={{ bgcolor: 'transparent', marginRight: '0!important' }}>{icon}</Avatar>;
  }

  const clickSummary = (event) => event.stopPropagation();

  const ExpandCollapseClickHandler = () => {
    setIsExpanded((prevVal) => !prevVal);
    if (onExpand) {
      onExpand(isExpanded);
    }
  };

  return (
    expandable
      ? (
        <Card elevation={6} {...other} sx={{ overflowX: 'auto' }}>
          <Accordion expanded={isExpanded} sx={{ height: '20%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon onClick={ExpandCollapseClickHandler} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ minHeight: '40px !important', pl: '8px' }}
            >
              <CardHeader
                onClick={clickSummary}
                sx={{
                  py: 0,
                  pl: '1px',
                  '.MuiCardHeader-avatar': {
                    marginRight: 0,
                  },
                  '.MuiCardHeader-action': {
                    marginY: 'auto',
                  },
                }}
                title={
                  <Box sx={{ display: 'flex' }}>
                    <Typography color="textSecondary" variant="h5" sx={{ fontWeight: 'large', p: 1, }}>
                      <b>{title}</b>
                    </Typography>

                    <Typography color="textSecondary" variant="subtitle1" sx={{ ml: 1, alignContent: 'right' }}>
                      {subTitle}
                    </Typography>
                  </Box>
        }
                avatar={avatar}
                action={action}
              />
            </AccordionSummary>
            <Divider />
            <AccordionDetails sx={{ p: 0 }}>
              <Box sx={{ p: bodyPadding }}>{body}</Box>
            </AccordionDetails>
          </Accordion>
        </Card>)
      : (
        <Card {...other}>
          <CardHeader
            sx={{
              py: 0,
              pl: 1,
              '.MuiCardHeader-avatar': {
                marginRight: 0,
              },
              '.MuiCardHeader-action': {
                margin: 'auto 0',
              },
            }}
            title={
              <Box sx={{ display: 'flex' }}>
                <Typography color="textSecondary" variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                  {title}
                </Typography>

                <Typography color="textSecondary" variant="subtitle1" sx={{ ml: 1 }}>
                  {subTitle}
                </Typography>
              </Box>
        }
            avatar={avatar}
            action={action}
          />
          <Divider />
          <Box sx={{ p: bodyPadding }}>{body}</Box>
        </Card>
      )
  );
};

export default WidgetCard;
