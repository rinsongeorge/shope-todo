import React from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MainAccordions = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recommended</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Sugar 1KG" />
            <FormControlLabel control={<Checkbox />} label="Rice 5KG" />
            <FormControlLabel control={<Checkbox />} label="Milk 2L" />
            <FormControlLabel control={<Checkbox />} label="Peanut 1KG" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Grocery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Sugar 1KG" />
            <FormControlLabel control={<Checkbox />} label="Rice 5KG" />
            <FormControlLabel control={<Checkbox />} label="Milk 2L" />
            <FormControlLabel control={<Checkbox />} label="Peanut 1KG" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Bills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="SP Util" />
            <FormControlLabel control={<Checkbox />} label="StarHub Wifi" />
            <FormControlLabel control={<Checkbox />} label="Credit Card" />
            <FormControlLabel control={<Checkbox />} label="HDB Rent" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Miscellaneous</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="MRT Card" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MainAccordions;
